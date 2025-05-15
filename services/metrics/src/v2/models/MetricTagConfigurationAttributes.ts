import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricCustomAggregation } from "./MetricCustomAggregation";
import { MetricTagConfigurationMetricTypes } from "./MetricTagConfigurationMetricTypes";

/**
 * Object containing the definition of a metric tag configuration attributes.
 */
export class MetricTagConfigurationAttributes {
  /**
   * Deprecated. You no longer need to configure specific time and space aggregations for Metrics Without Limits.
   */
  "aggregations"?: Array<MetricCustomAggregation>;
  /**
   * Timestamp when the tag configuration was created.
   */
  "createdAt"?: Date;
  /**
   * When set to true, the configuration will exclude the configured tags and include any other submitted tags.
   * When set to false, the configuration will include the configured tags and exclude any other submitted tags.
   * Defaults to false. Requires `tags` property.
   */
  "excludeTagsMode"?: boolean;
  /**
   * Toggle to include or exclude percentile aggregations for distribution metrics.
   * Only present when the `metric_type` is `distribution`.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
