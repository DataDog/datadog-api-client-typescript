/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricCustomAggregation } from "./MetricCustomAggregation";
import { MetricTagConfigurationMetricTypes } from "./MetricTagConfigurationMetricTypes";

import { AttributeTypeMap } from "../util";

/**
 * Object containing the definition of a metric tag configuration attributes.
 */
export class MetricTagConfigurationAttributes {
  /**
   * A list of queryable aggregation combinations for a count, rate, or gauge metric. By default, count and rate metrics require the (time: sum, space: sum) aggregation and Gauge metrics require the (time: avg, space: avg) aggregation. Additional time & space combinations are also available:  - time: avg, space: avg - time: avg, space: max - time: avg, space: min - time: avg, space: sum - time: count, space: sum - time: max, space: max - time: min, space: min - time: sum, space: avg - time: sum, space: sum  Can only be applied to metrics that have a `metric_type` of `count`, `rate`, or `gauge`.
   */
  "aggregations"?: Array<MetricCustomAggregation>;
  /**
   * Timestamp when the tag configuration was created.
   */
  "createdAt"?: Date;
  /**
   * Toggle to turn on/off percentile aggregations for distribution metrics. Only present when the `metric_type` is `distribution`.
   */
  "includePercentiles"?: boolean;
  /**
   * The metric's type.
   */
  "metricType"?: MetricTagConfigurationMetricTypes;
  /**
   * Timestamp when the tag configuration was last modified.
   */
  "modifiedAt"?: Date;
  /**
   * List of tag keys on which to group.
   */
  "tags"?: Array<string>;

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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
    },
    metricType: {
      baseName: "metric_type",
      type: "MetricTagConfigurationMetricTypes",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MetricTagConfigurationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
