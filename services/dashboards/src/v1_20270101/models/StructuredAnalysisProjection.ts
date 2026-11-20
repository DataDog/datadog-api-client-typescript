import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisProjectionColumnsItems } from "./StructuredAnalysisProjectionColumnsItems";
import { StructuredAnalysisProjectionType } from "./StructuredAnalysisProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<StructuredAnalysisProjectionColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisProjectionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<StructuredAnalysisProjectionColumnsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisProjection.attributeTypeMap;
  }

  public constructor() {}
}
