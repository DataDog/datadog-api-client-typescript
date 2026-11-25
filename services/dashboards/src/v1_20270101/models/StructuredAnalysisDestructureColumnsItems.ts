import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisDestructureColumnsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "keys": Array<string>;
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
    keys: {
      baseName: "keys",
      type: "Array<string>",
      required: true,
    },
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
    return StructuredAnalysisDestructureColumnsItems.attributeTypeMap;
  }

  public constructor() {}
}
