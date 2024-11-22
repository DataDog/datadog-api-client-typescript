/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported products for hourly usage attribution requests.
 */

export type HourlyUsageAttributionUsageType =
  | typeof API_USAGE
  | typeof APM_FARGATE_USAGE
  | typeof APM_HOST_USAGE
  | typeof APM_USM_USAGE
  | typeof APPSEC_FARGATE_USAGE
  | typeof APPSEC_USAGE
  | typeof ASM_SERVERLESS_TRACED_INVOCATIONS_USAGE
  | typeof ASM_SERVERLESS_TRACED_INVOCATIONS_PERCENTAGE
  | typeof BROWSER_USAGE
  | typeof CI_PIPELINE_INDEXED_SPANS_USAGE
  | typeof CI_TEST_INDEXED_SPANS_USAGE
  | typeof CI_VISIBILITY_ITR_USAGE
  | typeof CLOUD_SIEM_USAGE
  | typeof CODE_SECURITY_HOST_USAGE
  | typeof CONTAINER_EXCL_AGENT_USAGE
  | typeof CONTAINER_USAGE
  | typeof CSPM_CONTAINERS_USAGE
  | typeof CSPM_HOSTS_USAGE
  | typeof CUSTOM_EVENT_USAGE
  | typeof CUSTOM_INGESTED_TIMESERIES_USAGE
  | typeof CUSTOM_TIMESERIES_USAGE
  | typeof CWS_CONTAINERS_USAGE
  | typeof CWS_FARGATE_TASK_USAGE
  | typeof CWS_HOSTS_USAGE
  | typeof DATA_JOBS_MONITORING_USAGE
  | typeof DATA_STREAM_MONITORING_USAGE
  | typeof DBM_HOSTS_USAGE
  | typeof DBM_QUERIES_USAGE
  | typeof ERROR_TRACKING_USAGE
  | typeof ERROR_TRACKING_PERCENTAGE
  | typeof ESTIMATED_INDEXED_SPANS_USAGE
  | typeof ESTIMATED_INGESTED_SPANS_USAGE
  | typeof FARGATE_USAGE
  | typeof FUNCTIONS_USAGE
  | typeof INCIDENT_MANAGEMENT_MONTHLY_ACTIVE_USERS_USAGE
  | typeof INDEXED_SPANS_USAGE
  | typeof INFRA_HOST_USAGE
  | typeof INGESTED_LOGS_BYTES_USAGE
  | typeof INGESTED_SPANS_BYTES_USAGE
  | typeof INVOCATIONS_USAGE
  | typeof LAMBDA_TRACED_INVOCATIONS_USAGE
  | typeof LOGS_INDEXED_15DAY_USAGE
  | typeof LOGS_INDEXED_180DAY_USAGE
  | typeof LOGS_INDEXED_1DAY_USAGE
  | typeof LOGS_INDEXED_30DAY_USAGE
  | typeof LOGS_INDEXED_360DAY_USAGE
  | typeof LOGS_INDEXED_3DAY_USAGE
  | typeof LOGS_INDEXED_45DAY_USAGE
  | typeof LOGS_INDEXED_60DAY_USAGE
  | typeof LOGS_INDEXED_7DAY_USAGE
  | typeof LOGS_INDEXED_90DAY_USAGE
  | typeof LOGS_INDEXED_CUSTOM_RETENTION_USAGE
  | typeof MOBILE_APP_TESTING_USAGE
  | typeof NDM_NETFLOW_USAGE
  | typeof NPM_HOST_USAGE
  | typeof OBS_PIPELINE_BYTES_USAGE
  | typeof OBS_PIPELINE_VCPU_USAGE
  | typeof ONLINE_ARCHIVE_USAGE
  | typeof PROFILED_CONTAINER_USAGE
  | typeof PROFILED_FARGATE_USAGE
  | typeof PROFILED_HOST_USAGE
  | typeof RUM_BROWSER_MOBILE_SESSIONS_USAGE
  | typeof RUM_REPLAY_SESSIONS_USAGE
  | typeof SCA_FARGATE_USAGE
  | typeof SDS_SCANNED_BYTES_USAGE
  | typeof SERVERLESS_APPS_USAGE
  | typeof SIEM_ANALYZED_LOGS_ADD_ON_USAGE
  | typeof SIEM_INGESTED_BYTES_USAGE
  | typeof SNMP_USAGE
  | typeof UNIVERSAL_SERVICE_MONITORING_USAGE
  | typeof VULN_MANAGEMENT_HOSTS_USAGE
  | typeof WORKFLOW_EXECUTIONS_USAGE
  | UnparsedObject;
export const API_USAGE = "api_usage";
export const APM_FARGATE_USAGE = "apm_fargate_usage";
export const APM_HOST_USAGE = "apm_host_usage";
export const APM_USM_USAGE = "apm_usm_usage";
export const APPSEC_FARGATE_USAGE = "appsec_fargate_usage";
export const APPSEC_USAGE = "appsec_usage";
export const ASM_SERVERLESS_TRACED_INVOCATIONS_USAGE =
  "asm_serverless_traced_invocations_usage";
export const ASM_SERVERLESS_TRACED_INVOCATIONS_PERCENTAGE =
  "asm_serverless_traced_invocations_percentage";
export const BROWSER_USAGE = "browser_usage";
export const CI_PIPELINE_INDEXED_SPANS_USAGE =
  "ci_pipeline_indexed_spans_usage";
export const CI_TEST_INDEXED_SPANS_USAGE = "ci_test_indexed_spans_usage";
export const CI_VISIBILITY_ITR_USAGE = "ci_visibility_itr_usage";
export const CLOUD_SIEM_USAGE = "cloud_siem_usage";
export const CODE_SECURITY_HOST_USAGE = "code_security_host_usage";
export const CONTAINER_EXCL_AGENT_USAGE = "container_excl_agent_usage";
export const CONTAINER_USAGE = "container_usage";
export const CSPM_CONTAINERS_USAGE = "cspm_containers_usage";
export const CSPM_HOSTS_USAGE = "cspm_hosts_usage";
export const CUSTOM_EVENT_USAGE = "custom_event_usage";
export const CUSTOM_INGESTED_TIMESERIES_USAGE =
  "custom_ingested_timeseries_usage";
export const CUSTOM_TIMESERIES_USAGE = "custom_timeseries_usage";
export const CWS_CONTAINERS_USAGE = "cws_containers_usage";
export const CWS_FARGATE_TASK_USAGE = "cws_fargate_task_usage";
export const CWS_HOSTS_USAGE = "cws_hosts_usage";
export const DATA_JOBS_MONITORING_USAGE = "data_jobs_monitoring_usage";
export const DATA_STREAM_MONITORING_USAGE = "data_stream_monitoring_usage";
export const DBM_HOSTS_USAGE = "dbm_hosts_usage";
export const DBM_QUERIES_USAGE = "dbm_queries_usage";
export const ERROR_TRACKING_USAGE = "error_tracking_usage";
export const ERROR_TRACKING_PERCENTAGE = "error_tracking_percentage";
export const ESTIMATED_INDEXED_SPANS_USAGE = "estimated_indexed_spans_usage";
export const ESTIMATED_INGESTED_SPANS_USAGE = "estimated_ingested_spans_usage";
export const FARGATE_USAGE = "fargate_usage";
export const FUNCTIONS_USAGE = "functions_usage";
export const INCIDENT_MANAGEMENT_MONTHLY_ACTIVE_USERS_USAGE =
  "incident_management_monthly_active_users_usage";
export const INDEXED_SPANS_USAGE = "indexed_spans_usage";
export const INFRA_HOST_USAGE = "infra_host_usage";
export const INGESTED_LOGS_BYTES_USAGE = "ingested_logs_bytes_usage";
export const INGESTED_SPANS_BYTES_USAGE = "ingested_spans_bytes_usage";
export const INVOCATIONS_USAGE = "invocations_usage";
export const LAMBDA_TRACED_INVOCATIONS_USAGE =
  "lambda_traced_invocations_usage";
export const LOGS_INDEXED_15DAY_USAGE = "logs_indexed_15day_usage";
export const LOGS_INDEXED_180DAY_USAGE = "logs_indexed_180day_usage";
export const LOGS_INDEXED_1DAY_USAGE = "logs_indexed_1day_usage";
export const LOGS_INDEXED_30DAY_USAGE = "logs_indexed_30day_usage";
export const LOGS_INDEXED_360DAY_USAGE = "logs_indexed_360day_usage";
export const LOGS_INDEXED_3DAY_USAGE = "logs_indexed_3day_usage";
export const LOGS_INDEXED_45DAY_USAGE = "logs_indexed_45day_usage";
export const LOGS_INDEXED_60DAY_USAGE = "logs_indexed_60day_usage";
export const LOGS_INDEXED_7DAY_USAGE = "logs_indexed_7day_usage";
export const LOGS_INDEXED_90DAY_USAGE = "logs_indexed_90day_usage";
export const LOGS_INDEXED_CUSTOM_RETENTION_USAGE =
  "logs_indexed_custom_retention_usage";
export const MOBILE_APP_TESTING_USAGE = "mobile_app_testing_usage";
export const NDM_NETFLOW_USAGE = "ndm_netflow_usage";
export const NPM_HOST_USAGE = "npm_host_usage";
export const OBS_PIPELINE_BYTES_USAGE = "obs_pipeline_bytes_usage";
export const OBS_PIPELINE_VCPU_USAGE = "obs_pipelines_vcpu_usage";
export const ONLINE_ARCHIVE_USAGE = "online_archive_usage";
export const PROFILED_CONTAINER_USAGE = "profiled_container_usage";
export const PROFILED_FARGATE_USAGE = "profiled_fargate_usage";
export const PROFILED_HOST_USAGE = "profiled_host_usage";
export const RUM_BROWSER_MOBILE_SESSIONS_USAGE =
  "rum_browser_mobile_sessions_usage";
export const RUM_REPLAY_SESSIONS_USAGE = "rum_replay_sessions_usage";
export const SCA_FARGATE_USAGE = "sca_fargate_usage";
export const SDS_SCANNED_BYTES_USAGE = "sds_scanned_bytes_usage";
export const SERVERLESS_APPS_USAGE = "serverless_apps_usage";
export const SIEM_ANALYZED_LOGS_ADD_ON_USAGE =
  "siem_analyzed_logs_add_on_usage";
export const SIEM_INGESTED_BYTES_USAGE = "siem_ingested_bytes_usage";
export const SNMP_USAGE = "snmp_usage";
export const UNIVERSAL_SERVICE_MONITORING_USAGE =
  "universal_service_monitoring_usage";
export const VULN_MANAGEMENT_HOSTS_USAGE = "vuln_management_hosts_usage";
export const WORKFLOW_EXECUTIONS_USAGE = "workflow_executions_usage";
