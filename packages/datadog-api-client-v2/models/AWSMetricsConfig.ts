/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSMetricNameFilters } from "./AWSMetricNameFilters";
import { AWSNamespaceFilters } from "./AWSNamespaceFilters";
import { AWSNamespaceTagFilter } from "./AWSNamespaceTagFilter";
import { AWSResourceTypeTagFilter } from "./AWSResourceTypeTagFilter";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * Enable Service Quotas collection. Defaults to `false`.
   */
  "collectServiceQuotas"?: boolean;
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
   * AWS Metrics collection resource type tag filters list. Defaults to `[]`.
   */
  "resourceTypeTagFilters"?: Array<AWSResourceTypeTagFilter>;
  /**
   * AWS Metrics collection tag filters list. Defaults to `[]`.
   * Deprecated in favor of `resource_type_tag_filters`. The two fields are mutually exclusive on an account.
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
    collectServiceQuotas: {
      baseName: "collect_service_quotas",
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
    resourceTypeTagFilters: {
      baseName: "resource_type_tag_filters",
      type: "Array<AWSResourceTypeTagFilter>",
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
