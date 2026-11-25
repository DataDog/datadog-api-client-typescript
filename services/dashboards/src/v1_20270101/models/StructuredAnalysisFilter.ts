import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisFilterType } from "./StructuredAnalysisFilterType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisFilter {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "filter": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisFilterType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      baseName: "filter",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisFilterType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisFilter.attributeTypeMap;
  }

  public constructor() {}
}
