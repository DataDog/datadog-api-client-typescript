import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The rule that triggered this finding.
 */
export class FindingRule {
  /**
   * The ID of the rule that triggered this finding.
   */
  "id"?: string;
  /**
   * The name of the rule that triggered this finding.
   */
  "name"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FindingRule.attributeTypeMap;
  }

  public constructor() {}
}
