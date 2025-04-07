import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Git information.
 */
export class SyntheticsCIBatchMetadataGit {
  /**
   * Branch name.
   */
  "branch"?: string;
  /**
   * The commit SHA.
   */
  "commitSha"?: string;
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
    commitSha: {
      baseName: "commitSha",
      type: "string",
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
    return SyntheticsCIBatchMetadataGit.attributeTypeMap;
  }

  public constructor() {}
}
