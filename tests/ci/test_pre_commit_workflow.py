"""Exercise the CI credential boundary and the real fix-transfer shell commands."""

import ast
import os
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import unittest

import yaml


ROOT = Path(__file__).resolve().parents[2]
REPOSITORY = "DataDog/datadog-api-client-typescript"
TRUSTED_REVISION = "7bdb3651e1b556f8ea2c6424ee7152fe3853332b"
WORKFLOW = yaml.safe_load(
    (ROOT / ".github/workflows/reusable-pre-commit.yml").read_text()
)
PUSH_WORKFLOW = yaml.safe_load(
    (ROOT / ".github/workflows/reusable-pre-commit-fixes.yml").read_text()
)
POLICY = yaml.safe_load(
    (ROOT / ".github/chainguard/self.github.pre-commit.pull-requests.sts.yaml").read_text()
)


def step(workflow, name):
    return next(
        item
        for job in workflow["jobs"].values()
        for item in job.get("steps", [])
        if item.get("name") == name
    )


def condition(expression, values):
    """Evaluate the boolean comparisons used by these workflow guards, failing closed."""
    def substitute(match):
        token = match.group()
        if token.startswith("'"):
            return token
        return repr(values[token])

    expression = re.sub(r"'[^']*'|[\w.-]+(?:\(\))?", substitute, expression)
    tree = ast.parse(expression.replace("&&", "and").replace("||", "or"), mode="eval")
    allowed = (ast.Expression, ast.BoolOp, ast.And, ast.Or, ast.Compare,
               ast.Eq, ast.NotEq, ast.Constant, ast.Load)
    if any(not isinstance(node, allowed) for node in ast.walk(tree)):
        raise ValueError("Unsupported guard syntax")
    return eval(compile(tree, "<workflow guard>", "eval"), {"__builtins__": {}})


class CredentialBoundaryTests(unittest.TestCase):
    def test_pr_hooks_have_no_write_token_or_oidc(self):
        job = WORKFLOW["jobs"]["pre-commit"]
        self.assertEqual(job["permissions"], {"contents": "read"})
        checkout = next(s for s in job["steps"] if "actions/checkout@" in s.get("uses", ""))
        self.assertIs(checkout["with"]["persist-credentials"], False)
        self.assertNotIn("token", checkout["with"])
        self.assertFalse(any("octo-sts" in s.get("uses", "") for s in job["steps"]))

    def test_only_pinned_fix_workflow_matches_the_token_policy(self):
        trusted = f"{REPOSITORY}/.github/workflows/reusable-pre-commit-fixes.yml"
        claims = {
            "event_name": "pull_request",
            "job_workflow_ref": f"{trusted}@{TRUSTED_REVISION}",
            "ref": "refs/pull/123/merge",
            "repository": REPOSITORY,
        }

        def permits(candidate):
            # Use search, so missing regex anchors cannot accidentally pass this test.
            return all(re.search(pattern, candidate[key])
                       for key, pattern in POLICY["claim_pattern"].items())

        self.assertTrue(permits(claims))
        self.assertEqual(POLICY["permissions"], {"contents": "write"})
        for workflow_ref in (
            f"{REPOSITORY}/.github/workflows/reusable-pre-commit.yml@refs/pull/123/merge",
            f"{REPOSITORY}/.github/workflows/reusable-pre-commit.yml@refs/heads/master",
            f"{trusted}@refs/pull/123/merge",
            f"{trusted}@refs/heads/master",
            f"{trusted}@refs/heads/master-attacker",
            f"attacker/{trusted}@{TRUSTED_REVISION}",
            f"{trusted}@{TRUSTED_REVISION}-attacker",
        ):
            with self.subTest(workflow_ref=workflow_ref):
                self.assertFalse(permits(dict(claims, job_workflow_ref=workflow_ref)))
        self.assertFalse(permits(dict(claims, event_name="schedule")))
        self.assertFalse(permits(dict(claims, repository="attacker/fork")))

    def test_trusted_writer_rejects_forks_and_other_events(self):
        values = {
            "github.event_name": "pull_request",
            "github.repository": REPOSITORY,
            "github.event.pull_request.head.repo.full_name": REPOSITORY,
            "github.event.pull_request.head.ref": "contributor/fix",
            "github.event.pull_request.base.ref": "master",
        }
        guard = PUSH_WORKFLOW["jobs"]["push-fixes"]["if"]
        self.assertTrue(condition(guard, values))
        for key, value in (
            ("github.event.pull_request.head.repo.full_name", "attacker/fork"),
            ("github.repository", "attacker/fork"),
            ("github.event_name", "schedule"),
            ("github.event_name", "pull_request_target"),
            ("github.event.pull_request.head.ref", "master"),
        ):
            with self.subTest(key=key, value=value):
                self.assertFalse(condition(guard, dict(values, **{key: value})))
        caller = WORKFLOW["jobs"]["push-fixes"]
        self.assertEqual(caller["uses"],
                         f"{REPOSITORY}/.github/workflows/reusable-pre-commit-fixes.yml@{TRUSTED_REVISION}")

    def test_pinned_writer_matches_the_reviewed_workflow(self):
        pinned = subprocess.run(
            ["git", "hash-object", ".github/workflows/reusable-pre-commit-fixes.yml"],
            cwd=ROOT, text=True, capture_output=True, check=True,
        )
        # This is the blob at TRUSTED_REVISION; do not test edited, unpinned code instead.
        self.assertEqual(pinned.stdout.strip(), "fd3f136f5f25438843b102abf2b07120f27a955a")

    def test_fixes_require_enabled_same_repository_pr_and_hook_failure(self):
        values = {
            "failure()": True,
            "steps.pre_commit.outcome": "failure",
            "inputs.enable-commit-changes": True,
            "github.event_name": "pull_request",
            "github.event.pull_request.head.repo.full_name": REPOSITORY,
            "github.repository": REPOSITORY,
        }
        guard = step(WORKFLOW, "Prepare fixes")["if"]
        self.assertTrue(condition(guard, values))
        for key, value in (
            ("inputs.enable-commit-changes", False),
            ("github.event.pull_request.head.repo.full_name", "attacker/fork"),
            ("github.event_name", "schedule"),
            ("steps.pre_commit.outcome", "success"),
            ("steps.pre_commit.outcome", "skipped"),
            ("failure()", False),
        ):
            with self.subTest(key=key, value=value):
                self.assertFalse(condition(guard, dict(values, **{key: value})))


class FixTransferTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.source = self.root / "source"
        self.source.mkdir()
        self.origin = self.root / "origin.git"
        self.branch = "contributor/fix"
        self.git("init", "--bare", str(self.origin))
        self.git("init", "-b", self.branch)
        self.git("config", "user.name", "CI test fixture")
        self.git("config", "user.email", "ci-test@example.invalid")
        (self.source / "fixture.txt").write_text("before formatting\n")
        self.commit("PR head")
        self.head = self.git("rev-parse", "HEAD").stdout.strip()
        self.git("remote", "add", "origin", str(self.origin))
        self.git("push", "origin", self.branch)
        self.check_temp = self.root / "check"
        self.push_temp = self.root / "push"
        self.check_temp.mkdir()
        self.push_temp.mkdir()
        self.env = dict(os.environ, HEAD_SHA=self.head, HEAD_REF=self.branch,
                        GIT_AUTHOR_NAME="CI test fixture",
                        GIT_AUTHOR_EMAIL="ci-test@example.invalid",
                        REPOSITORY_URL=self.origin.as_uri(), TOKEN="fake-test-token")

    def git(self, *args):
        return subprocess.run(["git", *args], cwd=self.source, text=True,
                              capture_output=True, check=True)

    def commit(self, message):
        self.git("add", "-A")
        self.git("commit", "-m", message)

    def run_step(self, workflow, name, runner_temp, **env):
        output = runner_temp / "output"
        output.write_text("")
        result = subprocess.run(
            ["bash", "-e", "-o", "pipefail", "-c", step(workflow, name)["run"]],
            cwd=self.source, capture_output=True, text=True,
            env=dict(self.env, RUNNER_TEMP=str(runner_temp),
                     GITHUB_OUTPUT=str(output), **env),
        )
        return result, dict(line.split("=", 1) for line in output.read_text().splitlines())

    def prepare(self):
        (self.source / "fixture.txt").write_text("after formatting\n")
        # PR-supplied executable files must be transferred only as inert Git objects.
        (self.source / "package.json").write_text(
            '{"scripts":{"prepare":"touch ' + str(self.root / "executed") + '"}}\n'
        )
        result, output = self.run_step(WORKFLOW, "Prepare fixes", self.check_temp)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(output, {"created": "true"})
        shutil.copytree(self.check_temp / "pre-commit-fixes",
                        self.push_temp / "pre-commit-fixes")

    def validate(self):
        return self.run_step(PUSH_WORKFLOW, "Validate fixes", self.push_temp)

    def test_same_repository_fix_is_pushed_without_executing_pr_code(self):
        self.prepare()
        result, output = self.validate()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(list((self.push_temp / "pre-commit-repository").iterdir()),
                         [self.push_temp / "pre-commit-repository/.git"])
        result, _ = self.run_step(PUSH_WORKFLOW, "Push fixes", self.push_temp,
                                  FIX_SHA=output["sha"])
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(self.git("--git-dir", str(self.origin), "show",
                                  f"{self.branch}:fixture.txt").stdout, "after formatting\n")
        self.assertFalse((self.root / "executed").exists())
        self.assertNotIn("fake-test-token", (
            self.push_temp / "pre-commit-repository/.git/config").read_text())

    def test_concurrent_push_is_preserved(self):
        self.prepare()
        result, output = self.validate()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.git("reset", "--hard", self.head)
        (self.source / "fixture.txt").write_text("concurrent customer change\n")
        self.commit("Concurrent change")
        self.git("push", "origin", self.branch)
        result, _ = self.run_step(PUSH_WORKFLOW, "Push fixes", self.push_temp,
                                  FIX_SHA=output["sha"])
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(self.git("--git-dir", str(self.origin), "show",
                                  f"{self.branch}:fixture.txt").stdout,
                         "concurrent customer change\n")

    def test_fixes_for_another_revision_are_rejected(self):
        self.prepare()
        self.env["HEAD_SHA"] = self.git("rev-parse", "HEAD").stdout.strip()
        self.git("push", "origin", self.branch)
        result, _ = self.validate()
        self.assertNotEqual(result.returncode, 0)

    def test_merge_commit_artifact_is_rejected(self):
        self.prepare()
        fix = self.git("rev-parse", "HEAD").stdout.strip()
        tree = self.git("rev-parse", "HEAD^{tree}").stdout.strip()
        merge = self.git("commit-tree", tree, "-p", self.head, "-p", fix,
                         "-m", "Untrusted merge").stdout.strip()
        self.git("update-ref", "HEAD", merge)
        self.git("bundle", "create", str(self.push_temp / "pre-commit-fixes/fixes.bundle"),
                 "HEAD", f"^{self.head}")
        result, _ = self.validate()
        self.assertNotEqual(result.returncode, 0)

    def test_no_changes_produces_no_artifact(self):
        result, output = self.run_step(WORKFLOW, "Prepare fixes", self.check_temp)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(output, {})
        self.assertFalse((self.check_temp / "pre-commit-fixes").exists())

    def test_hooks_cannot_replace_the_expected_pr_head(self):
        (self.source / "fixture.txt").write_text("unexpected commit\n")
        self.commit("Hook changed history")
        result, _ = self.run_step(WORKFLOW, "Prepare fixes", self.check_temp)
        self.assertNotEqual(result.returncode, 0)


if __name__ == "__main__":
    unittest.main()
