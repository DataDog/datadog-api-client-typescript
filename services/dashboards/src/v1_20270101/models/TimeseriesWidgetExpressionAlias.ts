import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesWidgetExpressionAlias {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aliasName"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "expression": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aliasName: {
      baseName: "alias_name",
      type: "string",
    },
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesWidgetExpressionAlias.attributeTypeMap;
  }

  public constructor() {}
}
