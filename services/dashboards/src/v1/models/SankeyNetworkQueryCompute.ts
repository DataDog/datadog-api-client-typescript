import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregation } from "./EventsAggregation";

/**
 * Compute aggregation for network queries.
 */
export class SankeyNetworkQueryCompute {
  /**
   * The type of aggregation that can be performed on events-based queries.
   */
  "aggregation": EventsAggregation;
  /**
   * Metric to aggregate.
   */
  "metric": string;
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
    metric: {
      baseName: "metric",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SankeyNetworkQueryCompute.attributeTypeMap;
  }

  public constructor() {}
}
