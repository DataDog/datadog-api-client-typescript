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
   * The repository identifier.
   */
  "repositoryId": string;
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
      required: true,
    },
    repositoryId: {
      baseName: "repository_id",
      type: "string",
      required: true,
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
