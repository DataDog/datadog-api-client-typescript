import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Git info for DORA Metrics events.
 */
export class DORAGitInfo {
  /**
   * Git Commit SHA.
   */
  "commitSha": string;
  /**
   * Git Repository URL
   */
  "repositoryUrl": string;
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
    commitSha: {
      baseName: "commit_sha",
      type: "string",
      required: true,
    },
    repositoryUrl: {
      baseName: "repository_url",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAGitInfo.attributeTypeMap;
  }

  public constructor() {}
}
