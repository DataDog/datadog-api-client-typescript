import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarInterval } from "./CalendarInterval";
import { EventsAggregator } from "./EventsAggregator";
import { GraphTarget } from "./GraphTarget";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaUserJourneyQueryCompute {
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
  "target"?: GraphTarget;
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
    target: {
      baseName: "target",
      type: "GraphTarget",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaUserJourneyQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}
