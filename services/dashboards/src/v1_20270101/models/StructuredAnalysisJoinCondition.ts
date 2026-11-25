import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisJoinCondition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceColumn": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "targetColumn": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    sourceColumn: {
      baseName: "source_column",
      type: "string",
      required: true,
    },
    targetColumn: {
      baseName: "target_column",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisJoinCondition.attributeTypeMap;
  }

  public constructor() {}
}
