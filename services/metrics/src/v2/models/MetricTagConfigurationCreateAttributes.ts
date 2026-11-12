import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricCustomAggregation } from "./MetricCustomAggregation";
import { MetricTagConfigurationMetricTypes } from "./MetricTagConfigurationMetricTypes";

/**
 * Object containing the definition of a metric tag configuration to be created.
 */
export class MetricTagConfigurationCreateAttributes {
  /**
   * Deprecated. You no longer need to configure specific time and space aggregations for Metrics Without Limits.
   */
  "aggregations"?: Array<MetricCustomAggregation>;
  /**
   * When set to true, the configuration will exclude the configured tags and include any other submitted tags.
   * When set to false, the configuration will include the configured tags and exclude any other submitted tags.
   * Defaults to false. Requires `tags` property.
   */
  "excludeTagsMode"?: boolean;
  /**
   * Include percentile aggregations for metric types `distribution`, `exponential_histogram`,
   * and `explicit_histogram`. Omit this field to keep the current setting.
   */
  "includePercentiles"?: boolean;
  /**
   * The metric's type. Contact your Customer Success Manager for instructions on using native histogram types.
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
      type: "{ [key: string]: any; }",
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
