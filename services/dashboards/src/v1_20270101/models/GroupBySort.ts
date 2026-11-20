import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregator } from "./EventsAggregator";
import { GroupBySortOrder } from "./GroupBySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GroupBySort {
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
  "order"?: GroupBySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "source"?: string;
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
      type: "GroupBySortOrder",
    },
    source: {
      baseName: "source",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GroupBySort.attributeTypeMap;
  }

  public constructor() {}
}
