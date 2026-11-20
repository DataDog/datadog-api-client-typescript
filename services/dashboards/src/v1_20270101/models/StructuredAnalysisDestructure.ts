import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisDestructureColumnsItems } from "./StructuredAnalysisDestructureColumnsItems";
import { StructuredAnalysisDestructureType } from "./StructuredAnalysisDestructureType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisDestructure {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<StructuredAnalysisDestructureColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisDestructureType;
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
      type: "Array<StructuredAnalysisDestructureColumnsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisDestructureType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisDestructure.attributeTypeMap;
  }

  public constructor() {}
}
