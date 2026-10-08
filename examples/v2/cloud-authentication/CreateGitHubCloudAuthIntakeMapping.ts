/**
 * Create a GitHub cloud auth intake mapping returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createGitHubCloudAuthIntakeMapping"] =
  true;
const apiInstance = new v2.CloudAuthenticationApi(configuration);

const params: v2.CloudAuthenticationApiCreateGitHubCloudAuthIntakeMappingRequest =
  {
    body: {
      data: {
        attributes: {
          claimMatchers: {
            actor: "octocat",
            actorId: "1234567",
            enterprise: "test_enterprise",
            enterpriseId: "42",
            environment: "production",
            eventName: "push",
            jobWorkflowRef:
              "test_owner/test_repo/.github/workflows/jobs.yml@refs/heads/main",
            ref: "refs/heads/main",
            refType: "branch",
            repository: "test_owner/test_repo",
            repositoryId: "123456789",
            repositoryOwner: "test_owner",
            repositoryOwnerId: "987654321",
            repositoryVisibility: "public",
            runnerEnvironment: "github-hosted",
            sub: "repo:test_owner/test_repo:(ref:refs/heads/main|pull_request)",
            workflow: "CI",
            workflowRef:
              "test_owner/test_repo/.github/workflows/ci.yml@refs/heads/main",
          },
        },
        type: "github_oidc_auth_intake_mapping",
      },
    },
  };

apiInstance
  .createGitHubCloudAuthIntakeMapping(params)
  .then((data: v2.GitHubCloudAuthIntakeMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
