import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatasetSort20270101Aggregation } from "./DatasetSort20270101Aggregation";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class DatasetSort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": DatasetSort20270101Aggregation;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregation: {
      baseName: "aggregation",
      type: "DatasetSort20270101Aggregation",
      required: true,
    },
    column: {
      baseName: "column",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DatasetSort.attributeTypeMap;
  }

  public constructor() {}
}
