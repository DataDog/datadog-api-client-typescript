/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * If pipelines are triggered due to actions to a Git repository, then all payloads must contain this.
 * Note that either `tag` or `branch` has to be provided, but not both.
 */
export class CIAppGitInfo {
  /**
   * The commit author email.
   */
  "authorEmail": string;
  /**
   * The commit author name.
   */
  "authorName"?: string;
  /**
   * The commit author timestamp in RFC3339 format.
   */
  "authorTime"?: string;
  /**
   * The branch name (if a tag use the tag parameter).
   */
  "branch"?: string;
  /**
   * The commit timestamp in RFC3339 format.
   */
  "commitTime"?: string;
  /**
   * The committer email.
   */
  "committerEmail"?: string;
  /**
   * The committer name.
   */
  "committerName"?: string;
  /**
   * The Git repository's default branch.
   */
  "defaultBranch"?: string;
  /**
   * The commit message.
   */
  "message"?: string;
  /**
   * The URL of the repository.
   */
  "repositoryUrl": string;
  /**
   * The git commit SHA.
   */
  "sha": string;
  /**
   * The tag name (if a branch use the branch parameter).
   */
  "tag"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authorEmail: {
      baseName: "author_email",
      type: "string",
      required: true,
      format: "email",
    },
    authorName: {
      baseName: "author_name",
      type: "string",
    },
    authorTime: {
      baseName: "author_time",
      type: "string",
    },
    branch: {
      type: "string",
    },
    commitTime: {
      baseName: "commit_time",
      type: "string",
    },
    committerEmail: {
      baseName: "committer_email",
      type: "string",
      format: "email",
    },
    committerName: {
      baseName: "committer_name",
      type: "string",
    },
    defaultBranch: {
      baseName: "default_branch",
      type: "string",
    },
    message: {
      type: "string",
    },
    repositoryUrl: {
      baseName: "repository_url",
      type: "string",
      required: true,
    },
    sha: {
      type: "string",
      required: true,
    },
    tag: {
      type: "string",
    },
  };
}
