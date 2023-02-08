/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported metrics for monthly usage attribution requests.
 */

export type MonthlyUsageAttributionSupportedMetrics =
  | typeof API_USAGE
  | typeof API_PERCENTAGE
  | typeof APM_FARGATE_USAGE
  | typeof APM_FARGATE_PERCENTAGE
  | typeof APPSEC_FARGATE_USAGE
  | typeof APPSEC_FARGATE_PERCENTAGE
  | typeof APM_HOST_USAGE
  | typeof APM_HOST_PERCENTAGE
  | typeof APPSEC_USAGE
  | typeof APPSEC_PERCENTAGE
  | typeof BROWSER_USAGE
  | typeof BROWSER_PERCENTAGE
  | typeof CONTAINER_EXCL_AGENT_USAGE
  | typeof CONTAINER_EXCL_AGENT_PERCENTAGE
  | typeof CONTAINER_USAGE
  | typeof CONTAINER_PERCENTAGE
  | typeof CSPM_CONTAINERS_PERCENTAGE
  | typeof CSPM_CONTAINERS_USAGE
  | typeof CSPM_HOSTS_PERCENTAGE
  | typeof CSPM_HOSTS_USAGE
  | typeof CUSTOM_TIMESERIES_USAGE
  | typeof CUSTOM_TIMESERIES_PERCENTAGE
  | typeof CWS_CONTAINERS_PERCENTAGE
  | typeof CWS_CONTAINERS_USAGE
  | typeof CWS_HOSTS_PERCENTAGE
  | typeof CWS_HOSTS_USAGE
  | typeof DBM_HOSTS_PERCENTAGE
  | typeof DBM_HOSTS_USAGE
  | typeof DBM_QUERIES_PERCENTAGE
  | typeof DBM_QUERIES_USAGE
  | typeof ESTIMATED_INDEXED_LOGS_USAGE
  | typeof ESTIMATED_INDEXED_LOGS_PERCENTAGE
  | typeof ESTIMATED_INGESTED_LOGS_USAGE
  | typeof ESTIMATED_INGESTED_LOGS_PERCENTAGE
  | typeof ESTIMATED_INDEXED_SPANS_USAGE
  | typeof ESTIMATED_INDEXED_SPANS_PERCENTAGE
  | typeof ESTIMATED_INGESTED_SPANS_USAGE
  | typeof ESTIMATED_INGESTED_SPANS_PERCENTAGE
  | typeof FARGATE_USAGE
  | typeof FARGATE_PERCENTAGE
  | typeof FUNCTIONS_USAGE
  | typeof FUNCTIONS_PERCENTAGE
  | typeof INFRA_HOST_USAGE
  | typeof INFRA_HOST_PERCENTAGE
  | typeof INVOCATIONS_USAGE
  | typeof INVOCATIONS_PERCENTAGE
  | typeof NPM_HOST_USAGE
  | typeof NPM_HOST_PERCENTAGE
  | typeof PROFILED_CONTAINER_USAGE
  | typeof PROFILED_CONTAINER_PERCENTAGE
  | typeof PROFILED_HOST_USAGE
  | typeof PROFILED_HOST_PERCENTAGE
  | typeof SNMP_USAGE
  | typeof SNMP_PERCENTAGE
  | typeof ESTIMATED_RUM_SESSIONS_USAGE
  | typeof ESTIMATED_RUM_SESSIONS_PERCENTAGE
  | typeof ALL
  | UnparsedObject;
export const API_USAGE = "api_usage";
export const API_PERCENTAGE = "api_percentage";
export const APM_FARGATE_USAGE = "apm_fargate_usage";
export const APM_FARGATE_PERCENTAGE = "apm_fargate_percentage";
export const APPSEC_FARGATE_USAGE = "appsec_fargate_usage";
export const APPSEC_FARGATE_PERCENTAGE = "appsec_fargate_percentage";
export const APM_HOST_USAGE = "apm_host_usage";
export const APM_HOST_PERCENTAGE = "apm_host_percentage";
export const APPSEC_USAGE = "appsec_usage";
export const APPSEC_PERCENTAGE = "appsec_percentage";
export const BROWSER_USAGE = "browser_usage";
export const BROWSER_PERCENTAGE = "browser_percentage";
export const CONTAINER_EXCL_AGENT_USAGE = "container_excl_agent_usage";
export const CONTAINER_EXCL_AGENT_PERCENTAGE =
  "container_excl_agent_percentage";
export const CONTAINER_USAGE = "container_usage";
export const CONTAINER_PERCENTAGE = "container_percentage";
export const CSPM_CONTAINERS_PERCENTAGE = "cspm_containers_percentage";
export const CSPM_CONTAINERS_USAGE = "cspm_containers_usage";
export const CSPM_HOSTS_PERCENTAGE = "cspm_hosts_percentage";
export const CSPM_HOSTS_USAGE = "cspm_hosts_usage";
export const CUSTOM_TIMESERIES_USAGE = "custom_timeseries_usage";
export const CUSTOM_TIMESERIES_PERCENTAGE = "custom_timeseries_percentage";
export const CWS_CONTAINERS_PERCENTAGE = "cws_containers_percentage";
export const CWS_CONTAINERS_USAGE = "cws_containers_usage";
export const CWS_HOSTS_PERCENTAGE = "cws_hosts_percentage";
export const CWS_HOSTS_USAGE = "cws_hosts_usage";
export const DBM_HOSTS_PERCENTAGE = "dbm_hosts_percentage";
export const DBM_HOSTS_USAGE = "dbm_hosts_usage";
export const DBM_QUERIES_PERCENTAGE = "dbm_queries_percentage";
export const DBM_QUERIES_USAGE = "dbm_queries_usage";
export const ESTIMATED_INDEXED_LOGS_USAGE = "estimated_indexed_logs_usage";
export const ESTIMATED_INDEXED_LOGS_PERCENTAGE =
  "estimated_indexed_logs_percentage";
export const ESTIMATED_INGESTED_LOGS_USAGE = "estimated_ingested_logs_usage";
export const ESTIMATED_INGESTED_LOGS_PERCENTAGE =
  "estimated_ingested_logs_percentage";
export const ESTIMATED_INDEXED_SPANS_USAGE = "estimated_indexed_spans_usage";
export const ESTIMATED_INDEXED_SPANS_PERCENTAGE =
  "estimated_indexed_spans_percentage";
export const ESTIMATED_INGESTED_SPANS_USAGE = "estimated_ingested_spans_usage";
export const ESTIMATED_INGESTED_SPANS_PERCENTAGE =
  "estimated_ingested_spans_percentage";
export const FARGATE_USAGE = "fargate_usage";
export const FARGATE_PERCENTAGE = "fargate_percentage";
export const FUNCTIONS_USAGE = "functions_usage";
export const FUNCTIONS_PERCENTAGE = "functions_percentage";
export const INFRA_HOST_USAGE = "infra_host_usage";
export const INFRA_HOST_PERCENTAGE = "infra_host_percentage";
export const INVOCATIONS_USAGE = "invocations_usage";
export const INVOCATIONS_PERCENTAGE = "invocations_percentage";
export const NPM_HOST_USAGE = "npm_host_usage";
export const NPM_HOST_PERCENTAGE = "npm_host_percentage";
export const PROFILED_CONTAINER_USAGE = "profiled_container_usage";
export const PROFILED_CONTAINER_PERCENTAGE = "profiled_container_percentage";
export const PROFILED_HOST_USAGE = "profiled_host_usage";
export const PROFILED_HOST_PERCENTAGE = "profiled_host_percentage";
export const SNMP_USAGE = "snmp_usage";
export const SNMP_PERCENTAGE = "snmp_percentage";
export const ESTIMATED_RUM_SESSIONS_USAGE = "estimated_rum_sessions_usage";
export const ESTIMATED_RUM_SESSIONS_PERCENTAGE =
  "estimated_rum_sessions_percentage";
export const ALL = "*";
