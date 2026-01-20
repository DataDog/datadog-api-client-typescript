import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the monitor. For more information about `type`, see the [monitor options](https://docs.datadoghq.com/monitors/guide/monitor_api_options/) docs.
 */
export type MonitorType =
  | typeof COMPOSITE
  | typeof EVENT_ALERT
  | typeof LOG_ALERT
  | typeof METRIC_ALERT
  | typeof PROCESS_ALERT
  | typeof QUERY_ALERT
  | typeof RUM_ALERT
  | typeof SERVICE_CHECK
  | typeof SYNTHETICS_ALERT
  | typeof TRACE_ANALYTICS_ALERT
  | typeof SLO_ALERT
  | typeof EVENT_V2_ALERT
  | typeof AUDIT_ALERT
  | typeof CI_PIPELINES_ALERT
  | typeof CI_TESTS_ALERT
  | typeof ERROR_TRACKING_ALERT
  | typeof DATABASE_MONITORING_ALERT
  | typeof NETWORK_PERFORMANCE_ALERT
  | typeof COST_ALERT
  | typeof DATA_QUALITY_ALERT
  | typeof NETWORK_PATH_ALERT
  | UnparsedObject;
export const COMPOSITE = "composite";
export const EVENT_ALERT = "event alert";
export const LOG_ALERT = "log alert";
export const METRIC_ALERT = "metric alert";
export const PROCESS_ALERT = "process alert";
export const QUERY_ALERT = "query alert";
export const RUM_ALERT = "rum alert";
export const SERVICE_CHECK = "service check";
export const SYNTHETICS_ALERT = "synthetics alert";
export const TRACE_ANALYTICS_ALERT = "trace-analytics alert";
export const SLO_ALERT = "slo alert";
export const EVENT_V2_ALERT = "event-v2 alert";
export const AUDIT_ALERT = "audit alert";
export const CI_PIPELINES_ALERT = "ci-pipelines alert";
export const CI_TESTS_ALERT = "ci-tests alert";
export const ERROR_TRACKING_ALERT = "error-tracking alert";
export const DATABASE_MONITORING_ALERT = "database-monitoring alert";
export const NETWORK_PERFORMANCE_ALERT = "network-performance alert";
export const COST_ALERT = "cost alert";
export const DATA_QUALITY_ALERT = "data-quality alert";
export const NETWORK_PATH_ALERT = "network-path alert";
