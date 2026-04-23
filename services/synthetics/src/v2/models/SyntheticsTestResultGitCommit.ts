import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultGitUser } from "./SyntheticsTestResultGitUser";

/**
 * Details of the Git commit associated with the test result.
 */
export class SyntheticsTestResultGitCommit {
  /**
   * A Git user (author or committer).
   */
  "author"?: SyntheticsTestResultGitUser;
  /**
   * A Git user (author or committer).
   */
  "committer"?: SyntheticsTestResultGitUser;
  /**
   * Commit message.
   */
  "message"?: string;
  /**
   * Commit SHA.
   */
  "sha"?: string;
  /**
   * URL of the commit.
   */
  "url"?: string;
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
    author: {
      baseName: "author",
      type: "SyntheticsTestResultGitUser",
    },
    committer: {
      baseName: "committer",
      type: "SyntheticsTestResultGitUser",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    sha: {
      baseName: "sha",
      type: "string",
    },
    url: {
      baseName: "url",
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
    return SyntheticsTestResultGitCommit.attributeTypeMap;
  }

  public constructor() {}
}
