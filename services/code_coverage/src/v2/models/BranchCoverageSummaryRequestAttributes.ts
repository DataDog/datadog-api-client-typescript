import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes for requesting code coverage summary for a branch.
 */
export class BranchCoverageSummaryRequestAttributes {
  /**
   * The branch name.
   */
  "branch": string;
  /**
   * Deprecated: use `repository_url` instead. The repository URL.
   */
  "repositoryId"?: string;
  /**
   * The repository URL. Accepts a full URL with or without a scheme (for example, `https://github.com/org/repo` or `github.com/org/repo`).
   */
  "repositoryUrl"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      required: true,
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
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
    return BranchCoverageSummaryRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
