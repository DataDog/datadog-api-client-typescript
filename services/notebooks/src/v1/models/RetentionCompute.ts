import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsAggregation } from "./EventsAggregation";
import { RetentionComputeMetric } from "./RetentionComputeMetric";

/**
 * Compute configuration for retention queries.
 */
export class RetentionCompute {
  /**
   * The type of aggregation that can be performed on events-based queries.
   */
  "aggregation": EventsAggregation;
  /**
   * Metric for retention compute.
   */
  "metric": RetentionComputeMetric;
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
      type: "RetentionComputeMetric",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCompute.attributeTypeMap;
  }

  public constructor() {}
}
