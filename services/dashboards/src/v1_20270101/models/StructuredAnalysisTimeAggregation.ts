import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisTimeAggregation {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "interval"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeColumn": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    timeColumn: {
      baseName: "time_column",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisTimeAggregation.attributeTypeMap;
  }

  public constructor() {}
}
