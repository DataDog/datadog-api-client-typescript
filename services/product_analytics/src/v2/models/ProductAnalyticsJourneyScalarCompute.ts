import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsJourneyTarget } from "./ProductAnalyticsJourneyTarget";

/**
 * Defines the metric computed over the journey for a scalar query.
 */
export class ProductAnalyticsJourneyScalarCompute {
  /**
   * Aggregation function: `count`, `cardinality`, `avg`, `median`, `min`, `max`, `sum`,
   * or a percentile of the form `pc<N>` such as `pc95`. Defaults to `cardinality`.
   */
  "aggregation": string;
  /**
   * Metric to aggregate on. Use a facet path such as `@view.time_spent`, or one of the
   * journey metrics `__dd.conversion`, `__dd.conversion_rate`, `__dd.time_to_convert`,
   * or `__dd.dropoff_rate`. Defaults to `__dd.conversion`.
   */
  "metric"?: string;
  /**
   * A reference to a step, or a range of steps, in the journey.
   * Use a `node` target to name a single step, or a `path` target to name the range
   * between two steps.
   */
  "target"?: ProductAnalyticsJourneyTarget;
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
      type: "string",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "ProductAnalyticsJourneyTarget",
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
    return ProductAnalyticsJourneyScalarCompute.attributeTypeMap;
  }

  public constructor() {}
}
