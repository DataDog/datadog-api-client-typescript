import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultGitCommit } from "./SyntheticsTestResultGitCommit";

/**
 * Git information associated with the test result.
 */
export class SyntheticsTestResultGit {
  /**
   * Git branch name.
   */
  "branch"?: string;
  /**
   * Details of the Git commit associated with the test result.
   */
  "commit"?: SyntheticsTestResultGitCommit;
  /**
   * Git repository URL.
   */
  "repositoryUrl"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    branch: {
      baseName: "branch",
      type: "string",
    },
    commit: {
      baseName: "commit",
      type: "SyntheticsTestResultGitCommit",
    },
    repositoryUrl: {
      baseName: "repository_url",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestResultGit.attributeTypeMap;
  }

  public constructor() {}
}
