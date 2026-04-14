import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelComputeAggregation } from "./ProductAnalyticsFunnelComputeAggregation";
import { ProductAnalyticsFunnelComputeMetric } from "./ProductAnalyticsFunnelComputeMetric";

/**
 * Compute configuration for user journey funnel.
 */
export class ProductAnalyticsFunnelCompute {
  /**
   * Aggregation type for user journey funnel compute.
   */
  "aggregation": ProductAnalyticsFunnelComputeAggregation;
  /**
   * Metric for user journey funnel compute. `__dd.conversion` and `__dd.conversion_rate` accept `count` (unique users/sessions) and `cardinality` (total users/sessions) as aggregations.
   */
  "metric": ProductAnalyticsFunnelComputeMetric;
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
      type: "ProductAnalyticsFunnelComputeAggregation",
      required: true,
    },
    metric: {
      baseName: "metric",
      type: "ProductAnalyticsFunnelComputeMetric",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsFunnelCompute.attributeTypeMap;
  }

  public constructor() {}
}
