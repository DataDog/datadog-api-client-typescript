/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsFunnelComputeAggregation } from "./ProductAnalyticsFunnelComputeAggregation";
import { ProductAnalyticsFunnelComputeMetric } from "./ProductAnalyticsFunnelComputeMetric";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
