import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricCustomAggregation } from "./MetricCustomAggregation";

/**
 * Object containing the definition of a metric tag configuration to be updated.
 */
export class MetricTagConfigurationUpdateAttributes {
  /**
   * Deprecated. You no longer need to configure specific time and space aggregations for Metrics without Limits™.
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
   * A list of tag keys that will be queryable for your metric.
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
    excludeTagsMode: {
      baseName: "exclude_tags_mode",
      type: "boolean",
    },
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
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
    return MetricTagConfigurationUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
