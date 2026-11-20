import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarInterval } from "./CalendarInterval";
import { EventsAggregator } from "./EventsAggregator";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class LogsQueryCompute {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "aggregation": EventsAggregator;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "facet"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "interval"?: number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rollup"?: CalendarInterval;
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
    facet: {
      baseName: "facet",
      type: "string",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    rollup: {
      baseName: "rollup",
      type: "CalendarInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}
