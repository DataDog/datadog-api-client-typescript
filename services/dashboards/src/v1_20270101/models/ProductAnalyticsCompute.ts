import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarInterval } from "./CalendarInterval";
import { EventsAggregator } from "./EventsAggregator";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ProductAnalyticsCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "interval"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "metric"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rollup"?: CalendarInterval;
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
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    rollup: {
      baseName: "rollup",
      type: "CalendarInterval",
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
    return ProductAnalyticsCompute.attributeTypeMap;
  }

  public constructor() {}
}
