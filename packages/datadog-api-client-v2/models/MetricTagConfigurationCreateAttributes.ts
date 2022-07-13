/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricCustomAggregation } from "./MetricCustomAggregation";
import { MetricTagConfigurationMetricTypes } from "./MetricTagConfigurationMetricTypes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the definition of a metric tag configuration to be created.
 */
export class MetricTagConfigurationCreateAttributes {
  /**
   * A list of queryable aggregation combinations for a count, rate, or gauge metric.
   * By default, count and rate metrics require the (time: sum, space: sum) aggregation and
   * Gauge metrics require the (time: avg, space: avg) aggregation.
   * Additional time & space combinations are also available:
   *
   * - time: avg, space: avg
   * - time: avg, space: max
   * - time: avg, space: min
   * - time: avg, space: sum
   * - time: count, space: sum
   * - time: max, space: max
   * - time: min, space: min
   * - time: sum, space: avg
   * - time: sum, space: sum
   *
   * Can only be applied to metrics that have a `metric_type` of `count`, `rate`, or `gauge`.
   */
  "aggregations"?: Array<MetricCustomAggregation>;
  /**
   * Toggle to include/exclude percentiles for a distribution metric.
   * Defaults to false. Can only be applied to metrics that have a `metric_type` of `distribution`.
   */
  "includePercentiles"?: boolean;
  /**
   * The metric's type.
   */
  "metricType": MetricTagConfigurationMetricTypes;
  /**
   * A list of tag keys that will be queryable for your metric.
   */
  "tags": Array<string>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregations: {
      baseName: "aggregations",
      type: "Array<MetricCustomAggregation>",
    },
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
    },
    metricType: {
      baseName: "metric_type",
      type: "MetricTagConfigurationMetricTypes",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfigurationCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
