import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Response object containing the version history of a rule.
 */
export class RuleVersionHistory {
  /**
   * The number of rule versions.
   */
  "count"?: number;
  /**
   * The `RuleVersionHistory` `data`.
   */
  "data"?: any;
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
    count: {
      baseName: "count",
      type: "number",
      format: "int32",
    },
    data: {
      baseName: "data",
      type: "any",
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
    return RuleVersionHistory.attributeTypeMap;
  }

  public constructor() {}
}
