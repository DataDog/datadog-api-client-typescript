import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricMetadataOrigin } from "./MetricMetadataOrigin";
import { MetricMetadataUnit } from "./MetricMetadataUnit";

/**
 * Metadata for one metric. Every attribute is always present. A value that is unknown or not set is `null`.
 */
export class MetricMetadataAttributes {
  /**
   * Description of the metric, or `null` if none is set.
   */
  "description": string | null;
  /**
   * Whether historical metrics ingestion is enabled for the metric.
   */
  "historicalMetricsEnabled": boolean;
  /**
   * Whether percentile aggregations are enabled for the metric. Percentile aggregations are available only for distribution metrics.
   */
  "includePercentiles": boolean;
  /**
   * Name of the integration that sent the metric, or `null` if none is set. This is always `null` for
   * out-of-the-box RUM metrics.
   */
  "integration": string | null;
  /**
   * When the metric's tag or percentile configuration was last changed, or `null` if it has never been configured.
   */
  "lastConfiguredAt": Date | null;
  /**
   * Metric type, or `null` if it isn't known. Known values are `gauge`, `count`, `rate`, `distribution`,
   * `explicit_histogram`, and `exponential_histogram`, plus the legacy values `counter` and `hll`. New values may
   * be added. For histograms and sketches, this can differ from the type returned by
   * `GET /api/v1/metrics/{metric_name}`.
   */
  "metricType": string | null;
  /**
   * Where the metric comes from. Each value is the display label shown on the Metrics Summary page. The set of labels can grow as Datadog adds products. Each field is `null` when it isn't known.
   */
  "origin": MetricMetadataOrigin;
  /**
   * A unit of measure from the Datadog unit catalog, or `null` when no unit is set.
   */
  "perUnit": MetricMetadataUnit | null;
  /**
   * Short display name of the metric, or `null` if none is set.
   */
  "shortName": string | null;
  /**
   * How the metric reaches Datadog, or `null` if it isn't known. Known values are `intake`, `api_default`, and
   * `intake_serverless` for submitted metrics, and `api_logs`, `api_processes`, `api_apm_spans`, and `api_rum`
   * for metrics generated from logs, processes, APM spans, and RUM events. New values may be added.
   */
  "source": string | null;
  /**
   * StatsD flush interval of the metric in seconds, or `null` if none is set.
   */
  "statsdInterval": number | null;
  /**
   * A unit of measure from the Datadog unit catalog, or `null` when no unit is set.
   */
  "unit": MetricMetadataUnit | null;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    historicalMetricsEnabled: {
      baseName: "historical_metrics_enabled",
      type: "boolean",
      required: true,
    },
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "string",
      required: true,
    },
    lastConfiguredAt: {
      baseName: "last_configured_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    metricType: {
      baseName: "metric_type",
      type: "string",
      required: true,
    },
    origin: {
      baseName: "origin",
      type: "MetricMetadataOrigin",
      required: true,
    },
    perUnit: {
      baseName: "per_unit",
      type: "MetricMetadataUnit",
      required: true,
    },
    shortName: {
      baseName: "short_name",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "string",
      required: true,
    },
    statsdInterval: {
      baseName: "statsd_interval",
      type: "number",
      required: true,
      format: "int64",
    },
    unit: {
      baseName: "unit",
      type: "MetricMetadataUnit",
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
    return MetricMetadataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
