import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregation } from "./EventsAggregation";

/**
 * The instructions for what to compute for this query.
 */
export class EventsCompute {
  /**
   * The type of aggregation that can be performed on events-based queries.
   */
  "aggregation": EventsAggregation;
  /**
   * Interval for compute in milliseconds.
   */
  "interval"?: number;
  /**
   * The "measure" attribute on which to perform the computation.
   */
  "metric"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "EventsAggregation",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsCompute.attributeTypeMap;
  }

  public constructor() {}
}
