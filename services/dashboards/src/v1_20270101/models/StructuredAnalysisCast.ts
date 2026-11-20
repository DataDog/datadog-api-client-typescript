import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisCastTargetType } from "./StructuredAnalysisCastTargetType";
import { StructuredAnalysisCastType } from "./StructuredAnalysisCastType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisCast {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceColumn": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "targetColumn": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "targetType": StructuredAnalysisCastTargetType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisCastType;
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
    targetType: {
      baseName: "target_type",
      type: "StructuredAnalysisCastTargetType",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisCastType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisCast.attributeTypeMap;
  }

  public constructor() {}
}
