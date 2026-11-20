import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SortOrder2 } from "./SortOrder2";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AnalysisAggregationSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": SortOrder2;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "SortOrder2",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AnalysisAggregationSort.attributeTypeMap;
  }

  public constructor() {}
}
