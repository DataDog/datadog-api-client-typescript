import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AWSMetricNameFilters } from "./AWSMetricNameFilters";
import { AWSNamespaceFilters } from "./AWSNamespaceFilters";
import { AWSNamespaceTagFilter } from "./AWSNamespaceTagFilter";

/**
 * AWS Metrics Collection config.
 */
export class AWSMetricsConfig {
  /**
   * Enable EC2 automute for AWS metrics. Defaults to `true`.
   */
  "automuteEnabled"?: boolean;
  /**
   * Enable CloudWatch alarms collection. Defaults to `false`.
   */
  "collectCloudwatchAlarms"?: boolean;
  /**
   * Enable custom metrics collection. Defaults to `false`.
   */
  "collectCustomMetrics"?: boolean;
  /**
   * Enable AWS metrics collection. Defaults to `true`.
   */
  "enabled"?: boolean;
  /**
   * AWS CloudWatch metric name filters. Each filter applies to a single namespace.
   * Exactly one of `include_only` or `exclude_only` must be set on each filter.
   */
  "metricNameFilters"?: Array<AWSMetricNameFilters>;
  /**
   * AWS Metrics namespace filters. Defaults to `exclude_only`.
   */
  "namespaceFilters"?: AWSNamespaceFilters;
  /**
   * AWS Metrics collection tag filters list. Defaults to `[]`.
   */
  "tagFilters"?: Array<AWSNamespaceTagFilter>;
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
    automuteEnabled: {
      baseName: "automute_enabled",
      type: "boolean",
    },
    collectCloudwatchAlarms: {
      baseName: "collect_cloudwatch_alarms",
      type: "boolean",
    },
    collectCustomMetrics: {
      baseName: "collect_custom_metrics",
      type: "boolean",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    metricNameFilters: {
      baseName: "metric_name_filters",
      type: "Array<AWSMetricNameFilters>",
    },
    namespaceFilters: {
      baseName: "namespace_filters",
      type: "AWSNamespaceFilters",
    },
    tagFilters: {
      baseName: "tag_filters",
      type: "Array<AWSNamespaceTagFilter>",
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
    return AWSMetricsConfig.attributeTypeMap;
  }

  public constructor() {}
}
