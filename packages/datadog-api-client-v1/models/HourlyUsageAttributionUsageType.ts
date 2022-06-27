/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type HourlyUsageAttributionUsageType =
  | typeof API_USAGE
  | typeof APM_HOST_USAGE
  | typeof APPSEC_USAGE
  | typeof BROWSER_USAGE
  | typeof CONTAINER_USAGE
  | typeof CUSTOM_TIMESERIES_USAGE
  | typeof ESTIMATED_INDEXED_LOGS_USAGE
  | typeof ESTIMATED_INDEXED_SPANS_USAGE
  | typeof FARGATE_USAGE
  | typeof FUNCTIONS_USAGE
  | typeof INDEXED_LOGS_USAGE
  | typeof INFRA_HOST_USAGE
  | typeof INVOCATIONS_USAGE
  | typeof NPM_HOST_USAGE
  | typeof PROFILED_CONTAINER_USAGE
  | typeof PROFILED_HOST_USAGE
  | typeof SNMP_USAGE;
export const API_USAGE = "api_usage";
export const APM_HOST_USAGE = "apm_host_usage";
export const APPSEC_USAGE = "appsec_usage";
export const BROWSER_USAGE = "browser_usage";
export const CONTAINER_USAGE = "container_usage";
export const CUSTOM_TIMESERIES_USAGE = "custom_timeseries_usage";
export const ESTIMATED_INDEXED_LOGS_USAGE = "estimated_indexed_logs_usage";
export const ESTIMATED_INDEXED_SPANS_USAGE = "estimated_indexed_spans_usage";
export const FARGATE_USAGE = "fargate_usage";
export const FUNCTIONS_USAGE = "functions_usage";
export const INDEXED_LOGS_USAGE = "indexed_logs_usage";
export const INFRA_HOST_USAGE = "infra_host_usage";
export const INVOCATIONS_USAGE = "invocations_usage";
export const NPM_HOST_USAGE = "npm_host_usage";
export const PROFILED_CONTAINER_USAGE = "profiled_container_usage";
export const PROFILED_HOST_USAGE = "profiled_host_usage";
export const SNMP_USAGE = "snmp_usage";
