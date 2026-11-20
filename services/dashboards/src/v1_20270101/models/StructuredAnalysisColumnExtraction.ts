import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisColumnExtractionType } from "./StructuredAnalysisColumnExtractionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisColumnExtraction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "grokExpression": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "keepNulls"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceColumn": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisColumnExtractionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    grokExpression: {
      baseName: "grok_expression",
      type: "string",
      required: true,
    },
    keepNulls: {
      baseName: "keep_nulls",
      type: "boolean",
    },
    sourceColumn: {
      baseName: "source_column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisColumnExtractionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisColumnExtraction.attributeTypeMap;
  }

  public constructor() {}
}
