import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricCustomAggregation } from "./MetricCustomAggregation";
import { MetricTagConfigurationMetricTypes } from "./MetricTagConfigurationMetricTypes";

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
   * Can only be applied to non_distribution metrics that have a `metric_type` of `count`, `rate`, or `gauge`.
   */
  "aggregations"?: Array<MetricCustomAggregation>;
  /**
   * When set to true, the configuration will exclude the configured tags and include any other submitted tags.
   * When set to false, the configuration will include the configured tags and exclude any other submitted tags.
   * Defaults to false. Requires `tags` property.
   */
  "excludeTagsMode"?: boolean;
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
    aggregations: {
      baseName: "aggregations",
      type: "Array<MetricCustomAggregation>",
    },
    excludeTagsMode: {
      baseName: "exclude_tags_mode",
      type: "boolean",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
