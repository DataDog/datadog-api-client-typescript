import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregator } from "./EventsAggregator";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaAndFunctionEventQueryGroupBySort {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order"?: QuerySortOrder;
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
      type: "EventsAggregator",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionEventQueryGroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
