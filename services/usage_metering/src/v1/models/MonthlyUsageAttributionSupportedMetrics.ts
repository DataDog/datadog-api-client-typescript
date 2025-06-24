import { UnparsedObject } from "@datadog/datadog-api-client";

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
  | typeof APM_USM_USAGE
  | typeof APM_USM_PERCENTAGE
  | typeof APPSEC_USAGE
  | typeof APPSEC_PERCENTAGE
  | typeof ASM_SERVERLESS_TRACED_INVOCATIONS_USAGE
  | typeof ASM_SERVERLESS_TRACED_INVOCATIONS_PERCENTAGE
  | typeof BROWSER_USAGE
  | typeof BROWSER_PERCENTAGE
  | typeof CI_VISIBILITY_ITR_USAGE
  | typeof CI_VISIBILITY_ITR_PERCENTAGE
  | typeof CLOUD_SIEM_USAGE
  | typeof CLOUD_SIEM_PERCENTAGE
  | typeof CODE_SECURITY_HOST_USAGE
  | typeof CODE_SECURITY_HOST_PERCENTAGE
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
  | typeof CUSTOM_INGESTED_TIMESERIES_USAGE
  | typeof CUSTOM_INGESTED_TIMESERIES_PERCENTAGE
  | typeof CWS_CONTAINERS_PERCENTAGE
  | typeof CWS_CONTAINERS_USAGE
  | typeof CWS_FARGATE_TASK_PERCENTAGE
  | typeof CWS_FARGATE_TASK_USAGE
  | typeof CWS_HOSTS_PERCENTAGE
  | typeof CWS_HOSTS_USAGE
  | typeof DATA_JOBS_MONITORING_USAGE
  | typeof DATA_JOBS_MONITORING_PERCENTAGE
  | typeof DATA_STREAM_MONITORING_USAGE
  | typeof DATA_STREAM_MONITORING_PERCENTAGE
  | typeof DBM_HOSTS_PERCENTAGE
  | typeof DBM_HOSTS_USAGE
  | typeof DBM_QUERIES_PERCENTAGE
  | typeof DBM_QUERIES_USAGE
  | typeof ERROR_TRACKING_USAGE
  | typeof ERROR_TRACKING_PERCENTAGE
  | typeof ESTIMATED_INDEXED_SPANS_USAGE
  | typeof ESTIMATED_INDEXED_SPANS_PERCENTAGE
  | typeof ESTIMATED_INGESTED_SPANS_USAGE
  | typeof ESTIMATED_INGESTED_SPANS_PERCENTAGE
  | typeof FARGATE_USAGE
  | typeof FARGATE_PERCENTAGE
  | typeof FUNCTIONS_USAGE
  | typeof FUNCTIONS_PERCENTAGE
  | typeof INCIDENT_MANAGEMENT_MONTHLY_ACTIVE_USERS_USAGE
  | typeof INCIDENT_MANAGEMENT_MONTHLY_ACTIVE_USERS_PERCENTAGE
  | typeof INFRA_HOST_USAGE
  | typeof INFRA_HOST_PERCENTAGE
  | typeof INVOCATIONS_USAGE
  | typeof INVOCATIONS_PERCENTAGE
  | typeof LAMBDA_TRACED_INVOCATIONS_USAGE
  | typeof LAMBDA_TRACED_INVOCATIONS_PERCENTAGE
  | typeof MOBILE_APP_TESTING_USAGE
  | typeof MOBILE_APP_TESTING_PERCENTAGE
  | typeof NDM_NETFLOW_USAGE
  | typeof NDM_NETFLOW_PERCENTAGE
  | typeof NPM_HOST_USAGE
  | typeof NPM_HOST_PERCENTAGE
  | typeof OBS_PIPELINE_BYTES_USAGE
  | typeof OBS_PIPELINE_BYTES_PERCENTAGE
  | typeof OBS_PIPELINES_VCPU_USAGE
  | typeof OBS_PIPELINES_VCPU_PERCENTAGE
  | typeof ONLINE_ARCHIVE_USAGE
  | typeof ONLINE_ARCHIVE_PERCENTAGE
  | typeof PROFILED_CONTAINER_USAGE
  | typeof PROFILED_CONTAINER_PERCENTAGE
  | typeof PROFILED_FARGATE_USAGE
  | typeof PROFILED_FARGATE_PERCENTAGE
  | typeof PROFILED_HOST_USAGE
  | typeof PROFILED_HOST_PERCENTAGE
  | typeof SERVERLESS_APPS_USAGE
  | typeof SERVERLESS_APPS_PERCENTAGE
  | typeof SNMP_USAGE
  | typeof SNMP_PERCENTAGE
  | typeof UNIVERSAL_SERVICE_MONITORING_USAGE
  | typeof UNIVERSAL_SERVICE_MONITORING_PERCENTAGE
  | typeof VULN_MANAGEMENT_HOSTS_USAGE
  | typeof VULN_MANAGEMENT_HOSTS_PERCENTAGE
  | typeof SDS_SCANNED_BYTES_USAGE
  | typeof SDS_SCANNED_BYTES_PERCENTAGE
  | typeof CI_TEST_INDEXED_SPANS_USAGE
  | typeof CI_TEST_INDEXED_SPANS_PERCENTAGE
  | typeof INGESTED_LOGS_BYTES_USAGE
  | typeof INGESTED_LOGS_BYTES_PERCENTAGE
  | typeof CI_PIPELINE_INDEXED_SPANS_USAGE
  | typeof CI_PIPELINE_INDEXED_SPANS_PERCENTAGE
  | typeof INDEXED_SPANS_USAGE
  | typeof INDEXED_SPANS_PERCENTAGE
  | typeof CUSTOM_EVENT_USAGE
  | typeof CUSTOM_EVENT_PERCENTAGE
  | typeof LOGS_INDEXED_CUSTOM_RETENTION_USAGE
  | typeof LOGS_INDEXED_CUSTOM_RETENTION_PERCENTAGE
  | typeof LOGS_INDEXED_360DAY_USAGE
  | typeof LOGS_INDEXED_360DAY_PERCENTAGE
  | typeof LOGS_INDEXED_180DAY_USAGE
  | typeof LOGS_INDEXED_180DAY_PERCENTAGE
  | typeof LOGS_INDEXED_90DAY_USAGE
  | typeof LOGS_INDEXED_90DAY_PERCENTAGE
  | typeof LOGS_INDEXED_60DAY_USAGE
  | typeof LOGS_INDEXED_60DAY_PERCENTAGE
  | typeof LOGS_INDEXED_45DAY_USAGE
  | typeof LOGS_INDEXED_45DAY_PERCENTAGE
  | typeof LOGS_INDEXED_30DAY_USAGE
  | typeof LOGS_INDEXED_30DAY_PERCENTAGE
  | typeof LOGS_INDEXED_15DAY_USAGE
  | typeof LOGS_INDEXED_15DAY_PERCENTAGE
  | typeof LOGS_INDEXED_7DAY_USAGE
  | typeof LOGS_INDEXED_7DAY_PERCENTAGE
  | typeof LOGS_INDEXED_3DAY_USAGE
  | typeof LOGS_INDEXED_3DAY_PERCENTAGE
  | typeof LOGS_INDEXED_1DAY_USAGE
  | typeof LOGS_INDEXED_1DAY_PERCENTAGE
  | typeof PRODUCT_ANALYTICS_SESSION_USAGE
  | typeof PRODUCT_ANALYTICS_SESSION_PERCENTAGE
  | typeof RUM_REPLAY_SESSIONS_USAGE
  | typeof RUM_REPLAY_SESSIONS_PERCENTAGE
  | typeof RUM_BROWSER_MOBILE_SESSIONS_USAGE
  | typeof RUM_BROWSER_MOBILE_SESSIONS_PERCENTAGE
  | typeof INGESTED_SPANS_BYTES_USAGE
  | typeof INGESTED_SPANS_BYTES_PERCENTAGE
  | typeof SIEM_ANALYZED_LOGS_ADD_ON_USAGE
  | typeof SIEM_ANALYZED_LOGS_ADD_ON_PERCENTAGE
  | typeof SIEM_INGESTED_BYTES_USAGE
  | typeof SIEM_INGESTED_BYTES_PERCENTAGE
  | typeof WORKFLOW_EXECUTIONS_USAGE
  | typeof WORKFLOW_EXECUTIONS_PERCENTAGE
  | typeof SCA_FARGATE_USAGE
  | typeof SCA_FARGATE_PERCENTAGE
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
export const APM_USM_USAGE = "apm_usm_usage";
export const APM_USM_PERCENTAGE = "apm_usm_percentage";
export const APPSEC_USAGE = "appsec_usage";
export const APPSEC_PERCENTAGE = "appsec_percentage";
export const ASM_SERVERLESS_TRACED_INVOCATIONS_USAGE =
  "asm_serverless_traced_invocations_usage";
export const ASM_SERVERLESS_TRACED_INVOCATIONS_PERCENTAGE =
  "asm_serverless_traced_invocations_percentage";
export const BROWSER_USAGE = "browser_usage";
export const BROWSER_PERCENTAGE = "browser_percentage";
export const CI_VISIBILITY_ITR_USAGE = "ci_visibility_itr_usage";
export const CI_VISIBILITY_ITR_PERCENTAGE = "ci_visibility_itr_percentage";
export const CLOUD_SIEM_USAGE = "cloud_siem_usage";
export const CLOUD_SIEM_PERCENTAGE = "cloud_siem_percentage";
export const CODE_SECURITY_HOST_USAGE = "code_security_host_usage";
export const CODE_SECURITY_HOST_PERCENTAGE = "code_security_host_percentage";
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
export const CUSTOM_INGESTED_TIMESERIES_USAGE =
  "custom_ingested_timeseries_usage";
export const CUSTOM_INGESTED_TIMESERIES_PERCENTAGE =
  "custom_ingested_timeseries_percentage";
export const CWS_CONTAINERS_PERCENTAGE = "cws_containers_percentage";
export const CWS_CONTAINERS_USAGE = "cws_containers_usage";
export const CWS_FARGATE_TASK_PERCENTAGE = "cws_fargate_task_percentage";
export const CWS_FARGATE_TASK_USAGE = "cws_fargate_task_usage";
export const CWS_HOSTS_PERCENTAGE = "cws_hosts_percentage";
export const CWS_HOSTS_USAGE = "cws_hosts_usage";
export const DATA_JOBS_MONITORING_USAGE = "data_jobs_monitoring_usage";
export const DATA_JOBS_MONITORING_PERCENTAGE =
  "data_jobs_monitoring_percentage";
export const DATA_STREAM_MONITORING_USAGE = "data_stream_monitoring_usage";
export const DATA_STREAM_MONITORING_PERCENTAGE =
  "data_stream_monitoring_percentage";
export const DBM_HOSTS_PERCENTAGE = "dbm_hosts_percentage";
export const DBM_HOSTS_USAGE = "dbm_hosts_usage";
export const DBM_QUERIES_PERCENTAGE = "dbm_queries_percentage";
export const DBM_QUERIES_USAGE = "dbm_queries_usage";
export const ERROR_TRACKING_USAGE = "error_tracking_usage";
export const ERROR_TRACKING_PERCENTAGE = "error_tracking_percentage";
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
export const INCIDENT_MANAGEMENT_MONTHLY_ACTIVE_USERS_USAGE =
  "incident_management_monthly_active_users_usage";
export const INCIDENT_MANAGEMENT_MONTHLY_ACTIVE_USERS_PERCENTAGE =
  "incident_management_monthly_active_users_percentage";
export const INFRA_HOST_USAGE = "infra_host_usage";
export const INFRA_HOST_PERCENTAGE = "infra_host_percentage";
export const INVOCATIONS_USAGE = "invocations_usage";
export const INVOCATIONS_PERCENTAGE = "invocations_percentage";
export const LAMBDA_TRACED_INVOCATIONS_USAGE =
  "lambda_traced_invocations_usage";
export const LAMBDA_TRACED_INVOCATIONS_PERCENTAGE =
  "lambda_traced_invocations_percentage";
export const MOBILE_APP_TESTING_USAGE = "mobile_app_testing_percentage";
export const MOBILE_APP_TESTING_PERCENTAGE = "mobile_app_testing_usage";
export const NDM_NETFLOW_USAGE = "ndm_netflow_usage";
export const NDM_NETFLOW_PERCENTAGE = "ndm_netflow_percentage";
export const NPM_HOST_USAGE = "npm_host_usage";
export const NPM_HOST_PERCENTAGE = "npm_host_percentage";
export const OBS_PIPELINE_BYTES_USAGE = "obs_pipeline_bytes_usage";
export const OBS_PIPELINE_BYTES_PERCENTAGE = "obs_pipeline_bytes_percentage";
export const OBS_PIPELINES_VCPU_USAGE = "obs_pipelines_vcpu_usage";
export const OBS_PIPELINES_VCPU_PERCENTAGE = "obs_pipelines_vcpu_percentage";
export const ONLINE_ARCHIVE_USAGE = "online_archive_usage";
export const ONLINE_ARCHIVE_PERCENTAGE = "online_archive_percentage";
export const PROFILED_CONTAINER_USAGE = "profiled_container_usage";
export const PROFILED_CONTAINER_PERCENTAGE = "profiled_container_percentage";
export const PROFILED_FARGATE_USAGE = "profiled_fargate_usage";
export const PROFILED_FARGATE_PERCENTAGE = "profiled_fargate_percentage";
export const PROFILED_HOST_USAGE = "profiled_host_usage";
export const PROFILED_HOST_PERCENTAGE = "profiled_host_percentage";
export const SERVERLESS_APPS_USAGE = "serverless_apps_usage";
export const SERVERLESS_APPS_PERCENTAGE = "serverless_apps_percentage";
export const SNMP_USAGE = "snmp_usage";
export const SNMP_PERCENTAGE = "snmp_percentage";
export const UNIVERSAL_SERVICE_MONITORING_USAGE =
  "universal_service_monitoring_usage";
export const UNIVERSAL_SERVICE_MONITORING_PERCENTAGE =
  "universal_service_monitoring_percentage";
export const VULN_MANAGEMENT_HOSTS_USAGE = "vuln_management_hosts_usage";
export const VULN_MANAGEMENT_HOSTS_PERCENTAGE =
  "vuln_management_hosts_percentage";
export const SDS_SCANNED_BYTES_USAGE = "sds_scanned_bytes_usage";
export const SDS_SCANNED_BYTES_PERCENTAGE = "sds_scanned_bytes_percentage";
export const CI_TEST_INDEXED_SPANS_USAGE = "ci_test_indexed_spans_usage";
export const CI_TEST_INDEXED_SPANS_PERCENTAGE =
  "ci_test_indexed_spans_percentage";
export const INGESTED_LOGS_BYTES_USAGE = "ingested_logs_bytes_usage";
export const INGESTED_LOGS_BYTES_PERCENTAGE = "ingested_logs_bytes_percentage";
export const CI_PIPELINE_INDEXED_SPANS_USAGE =
  "ci_pipeline_indexed_spans_usage";
export const CI_PIPELINE_INDEXED_SPANS_PERCENTAGE =
  "ci_pipeline_indexed_spans_percentage";
export const INDEXED_SPANS_USAGE = "indexed_spans_usage";
export const INDEXED_SPANS_PERCENTAGE = "indexed_spans_percentage";
export const CUSTOM_EVENT_USAGE = "custom_event_usage";
export const CUSTOM_EVENT_PERCENTAGE = "custom_event_percentage";
export const LOGS_INDEXED_CUSTOM_RETENTION_USAGE =
  "logs_indexed_custom_retention_usage";
export const LOGS_INDEXED_CUSTOM_RETENTION_PERCENTAGE =
  "logs_indexed_custom_retention_percentage";
export const LOGS_INDEXED_360DAY_USAGE = "logs_indexed_360day_usage";
export const LOGS_INDEXED_360DAY_PERCENTAGE = "logs_indexed_360day_percentage";
export const LOGS_INDEXED_180DAY_USAGE = "logs_indexed_180day_usage";
export const LOGS_INDEXED_180DAY_PERCENTAGE = "logs_indexed_180day_percentage";
export const LOGS_INDEXED_90DAY_USAGE = "logs_indexed_90day_usage";
export const LOGS_INDEXED_90DAY_PERCENTAGE = "logs_indexed_90day_percentage";
export const LOGS_INDEXED_60DAY_USAGE = "logs_indexed_60day_usage";
export const LOGS_INDEXED_60DAY_PERCENTAGE = "logs_indexed_60day_percentage";
export const LOGS_INDEXED_45DAY_USAGE = "logs_indexed_45day_usage";
export const LOGS_INDEXED_45DAY_PERCENTAGE = "logs_indexed_45day_percentage";
export const LOGS_INDEXED_30DAY_USAGE = "logs_indexed_30day_usage";
export const LOGS_INDEXED_30DAY_PERCENTAGE = "logs_indexed_30day_percentage";
export const LOGS_INDEXED_15DAY_USAGE = "logs_indexed_15day_usage";
export const LOGS_INDEXED_15DAY_PERCENTAGE = "logs_indexed_15day_percentage";
export const LOGS_INDEXED_7DAY_USAGE = "logs_indexed_7day_usage";
export const LOGS_INDEXED_7DAY_PERCENTAGE = "logs_indexed_7day_percentage";
export const LOGS_INDEXED_3DAY_USAGE = "logs_indexed_3day_usage";
export const LOGS_INDEXED_3DAY_PERCENTAGE = "logs_indexed_3day_percentage";
export const LOGS_INDEXED_1DAY_USAGE = "logs_indexed_1day_usage";
export const LOGS_INDEXED_1DAY_PERCENTAGE = "logs_indexed_1day_percentage";
export const PRODUCT_ANALYTICS_SESSION_USAGE =
  "product_analytics_session_usage";
export const PRODUCT_ANALYTICS_SESSION_PERCENTAGE =
  "product_analytics_session_percentage";
export const RUM_REPLAY_SESSIONS_USAGE = "rum_replay_sessions_usage";
export const RUM_REPLAY_SESSIONS_PERCENTAGE = "rum_replay_sessions_percentage";
export const RUM_BROWSER_MOBILE_SESSIONS_USAGE =
  "rum_browser_mobile_sessions_usage";
export const RUM_BROWSER_MOBILE_SESSIONS_PERCENTAGE =
  "rum_browser_mobile_sessions_percentage";
export const INGESTED_SPANS_BYTES_USAGE = "ingested_spans_bytes_usage";
export const INGESTED_SPANS_BYTES_PERCENTAGE =
  "ingested_spans_bytes_percentage";
export const SIEM_ANALYZED_LOGS_ADD_ON_USAGE =
  "siem_analyzed_logs_add_on_usage";
export const SIEM_ANALYZED_LOGS_ADD_ON_PERCENTAGE =
  "siem_analyzed_logs_add_on_percentage";
export const SIEM_INGESTED_BYTES_USAGE = "siem_ingested_bytes_usage";
export const SIEM_INGESTED_BYTES_PERCENTAGE = "siem_ingested_bytes_percentage";
export const WORKFLOW_EXECUTIONS_USAGE = "workflow_executions_usage";
export const WORKFLOW_EXECUTIONS_PERCENTAGE = "workflow_executions_percentage";
export const SCA_FARGATE_USAGE = "sca_fargate_usage";
export const SCA_FARGATE_PERCENTAGE = "sca_fargate_percentage";
export const ALL = "*";
