import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A query-based condition for an incident rule.
 */
export class IncidentRuleQueryCondition {
  /**
   * The normalized query string.
   */
  "normalizedQuery"?: string;
  /**
   * The raw query string.
   */
  "rawQuery"?: string;
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
    normalizedQuery: {
      baseName: "normalized_query",
      type: "string",
    },
    rawQuery: {
      baseName: "raw_query",
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
    return IncidentRuleQueryCondition.attributeTypeMap;
  }

  public constructor() {}
}
