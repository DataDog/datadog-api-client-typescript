import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { HourlyUsageAttributionBody } from "./HourlyUsageAttributionBody";
import { HourlyUsageAttributionMetadata } from "./HourlyUsageAttributionMetadata";
import { HourlyUsageAttributionPagination } from "./HourlyUsageAttributionPagination";
import { HourlyUsageAttributionResponse } from "./HourlyUsageAttributionResponse";
import { LogsByRetention } from "./LogsByRetention";
import { LogsByRetentionMonthlyUsage } from "./LogsByRetentionMonthlyUsage";
import { LogsByRetentionOrgUsage } from "./LogsByRetentionOrgUsage";
import { LogsByRetentionOrgs } from "./LogsByRetentionOrgs";
import { LogsRetentionAggSumUsage } from "./LogsRetentionAggSumUsage";
import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";
import { MonthlyUsageAttributionBody } from "./MonthlyUsageAttributionBody";
import { MonthlyUsageAttributionMetadata } from "./MonthlyUsageAttributionMetadata";
import { MonthlyUsageAttributionPagination } from "./MonthlyUsageAttributionPagination";
import { MonthlyUsageAttributionResponse } from "./MonthlyUsageAttributionResponse";
import { MonthlyUsageAttributionValues } from "./MonthlyUsageAttributionValues";
import { UsageAnalyzedLogsHour } from "./UsageAnalyzedLogsHour";
import { UsageAnalyzedLogsResponse } from "./UsageAnalyzedLogsResponse";
import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";
import { UsageAuditLogsHour } from "./UsageAuditLogsHour";
import { UsageAuditLogsResponse } from "./UsageAuditLogsResponse";
import { UsageBillableSummaryBody } from "./UsageBillableSummaryBody";
import { UsageBillableSummaryHour } from "./UsageBillableSummaryHour";
import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";
import { UsageBillableSummaryResponse } from "./UsageBillableSummaryResponse";
import { UsageCIVisibilityHour } from "./UsageCIVisibilityHour";
import { UsageCIVisibilityResponse } from "./UsageCIVisibilityResponse";
import { UsageCWSHour } from "./UsageCWSHour";
import { UsageCWSResponse } from "./UsageCWSResponse";
import { UsageCloudSecurityPostureManagementHour } from "./UsageCloudSecurityPostureManagementHour";
import { UsageCloudSecurityPostureManagementResponse } from "./UsageCloudSecurityPostureManagementResponse";
import { UsageCustomReportsAttributes } from "./UsageCustomReportsAttributes";
import { UsageCustomReportsData } from "./UsageCustomReportsData";
import { UsageCustomReportsMeta } from "./UsageCustomReportsMeta";
import { UsageCustomReportsPage } from "./UsageCustomReportsPage";
import { UsageCustomReportsResponse } from "./UsageCustomReportsResponse";
import { UsageDBMHour } from "./UsageDBMHour";
import { UsageDBMResponse } from "./UsageDBMResponse";
import { UsageFargateHour } from "./UsageFargateHour";
import { UsageFargateResponse } from "./UsageFargateResponse";
import { UsageHostHour } from "./UsageHostHour";
import { UsageHostsResponse } from "./UsageHostsResponse";
import { UsageIncidentManagementHour } from "./UsageIncidentManagementHour";
import { UsageIncidentManagementResponse } from "./UsageIncidentManagementResponse";
import { UsageIndexedSpansHour } from "./UsageIndexedSpansHour";
import { UsageIndexedSpansResponse } from "./UsageIndexedSpansResponse";
import { UsageIngestedSpansHour } from "./UsageIngestedSpansHour";
import { UsageIngestedSpansResponse } from "./UsageIngestedSpansResponse";
import { UsageIoTHour } from "./UsageIoTHour";
import { UsageIoTResponse } from "./UsageIoTResponse";
import { UsageLambdaHour } from "./UsageLambdaHour";
import { UsageLambdaResponse } from "./UsageLambdaResponse";
import { UsageLogsByIndexHour } from "./UsageLogsByIndexHour";
import { UsageLogsByIndexResponse } from "./UsageLogsByIndexResponse";
import { UsageLogsByRetentionHour } from "./UsageLogsByRetentionHour";
import { UsageLogsByRetentionResponse } from "./UsageLogsByRetentionResponse";
import { UsageLogsHour } from "./UsageLogsHour";
import { UsageLogsResponse } from "./UsageLogsResponse";
import { UsageNetworkFlowsHour } from "./UsageNetworkFlowsHour";
import { UsageNetworkFlowsResponse } from "./UsageNetworkFlowsResponse";
import { UsageNetworkHostsHour } from "./UsageNetworkHostsHour";
import { UsageNetworkHostsResponse } from "./UsageNetworkHostsResponse";
import { UsageOnlineArchiveHour } from "./UsageOnlineArchiveHour";
import { UsageOnlineArchiveResponse } from "./UsageOnlineArchiveResponse";
import { UsageProfilingHour } from "./UsageProfilingHour";
import { UsageProfilingResponse } from "./UsageProfilingResponse";
import { UsageRumSessionsHour } from "./UsageRumSessionsHour";
import { UsageRumSessionsResponse } from "./UsageRumSessionsResponse";
import { UsageRumUnitsHour } from "./UsageRumUnitsHour";
import { UsageRumUnitsResponse } from "./UsageRumUnitsResponse";
import { UsageSDSHour } from "./UsageSDSHour";
import { UsageSDSResponse } from "./UsageSDSResponse";
import { UsageSNMPHour } from "./UsageSNMPHour";
import { UsageSNMPResponse } from "./UsageSNMPResponse";
import { UsageSpecifiedCustomReportsAttributes } from "./UsageSpecifiedCustomReportsAttributes";
import { UsageSpecifiedCustomReportsData } from "./UsageSpecifiedCustomReportsData";
import { UsageSpecifiedCustomReportsMeta } from "./UsageSpecifiedCustomReportsMeta";
import { UsageSpecifiedCustomReportsPage } from "./UsageSpecifiedCustomReportsPage";
import { UsageSpecifiedCustomReportsResponse } from "./UsageSpecifiedCustomReportsResponse";
import { UsageSummaryDate } from "./UsageSummaryDate";
import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";
import { UsageSummaryResponse } from "./UsageSummaryResponse";
import { UsageSyntheticsAPIHour } from "./UsageSyntheticsAPIHour";
import { UsageSyntheticsAPIResponse } from "./UsageSyntheticsAPIResponse";
import { UsageSyntheticsBrowserHour } from "./UsageSyntheticsBrowserHour";
import { UsageSyntheticsBrowserResponse } from "./UsageSyntheticsBrowserResponse";
import { UsageSyntheticsHour } from "./UsageSyntheticsHour";
import { UsageSyntheticsResponse } from "./UsageSyntheticsResponse";
import { UsageTimeseriesHour } from "./UsageTimeseriesHour";
import { UsageTimeseriesResponse } from "./UsageTimeseriesResponse";
import { UsageTopAvgMetricsHour } from "./UsageTopAvgMetricsHour";
import { UsageTopAvgMetricsMetadata } from "./UsageTopAvgMetricsMetadata";
import { UsageTopAvgMetricsPagination } from "./UsageTopAvgMetricsPagination";
import { UsageTopAvgMetricsResponse } from "./UsageTopAvgMetricsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    HourlyUsageAttributionUsageType: [
      "api_usage",
      "apm_fargate_usage",
      "apm_host_usage",
      "apm_usm_usage",
      "appsec_fargate_usage",
      "appsec_usage",
      "asm_serverless_traced_invocations_usage",
      "asm_serverless_traced_invocations_percentage",
      "browser_usage",
      "ci_pipeline_indexed_spans_usage",
      "ci_test_indexed_spans_usage",
      "ci_visibility_itr_usage",
      "cloud_siem_usage",
      "code_security_host_usage",
      "container_excl_agent_usage",
      "container_usage",
      "cspm_containers_usage",
      "cspm_hosts_usage",
      "custom_event_usage",
      "custom_ingested_timeseries_usage",
      "custom_timeseries_usage",
      "cws_containers_usage",
      "cws_fargate_task_usage",
      "cws_hosts_usage",
      "data_jobs_monitoring_usage",
      "data_stream_monitoring_usage",
      "dbm_hosts_usage",
      "dbm_queries_usage",
      "error_tracking_usage",
      "error_tracking_percentage",
      "estimated_indexed_spans_usage",
      "estimated_ingested_spans_usage",
      "fargate_usage",
      "functions_usage",
      "incident_management_monthly_active_users_usage",
      "indexed_spans_usage",
      "infra_host_usage",
      "ingested_logs_bytes_usage",
      "ingested_spans_bytes_usage",
      "invocations_usage",
      "lambda_traced_invocations_usage",
      "logs_indexed_15day_usage",
      "logs_indexed_180day_usage",
      "logs_indexed_1day_usage",
      "logs_indexed_30day_usage",
      "logs_indexed_360day_usage",
      "logs_indexed_3day_usage",
      "logs_indexed_45day_usage",
      "logs_indexed_60day_usage",
      "logs_indexed_7day_usage",
      "logs_indexed_90day_usage",
      "logs_indexed_custom_retention_usage",
      "mobile_app_testing_usage",
      "ndm_netflow_usage",
      "npm_host_usage",
      "obs_pipeline_bytes_usage",
      "obs_pipelines_vcpu_usage",
      "online_archive_usage",
      "profiled_container_usage",
      "profiled_fargate_usage",
      "profiled_host_usage",
      "product_analytics_session_usage",
      "rum_browser_mobile_sessions_usage",
      "rum_replay_sessions_usage",
      "sca_fargate_usage",
      "sds_scanned_bytes_usage",
      "serverless_apps_usage",
      "siem_analyzed_logs_add_on_usage",
      "siem_ingested_bytes_usage",
      "snmp_usage",
      "universal_service_monitoring_usage",
      "vuln_management_hosts_usage",
      "workflow_executions_usage",
    ],
    MonthlyUsageAttributionSupportedMetrics: [
      "api_usage",
      "api_percentage",
      "apm_fargate_usage",
      "apm_fargate_percentage",
      "appsec_fargate_usage",
      "appsec_fargate_percentage",
      "apm_host_usage",
      "apm_host_percentage",
      "apm_usm_usage",
      "apm_usm_percentage",
      "appsec_usage",
      "appsec_percentage",
      "asm_serverless_traced_invocations_usage",
      "asm_serverless_traced_invocations_percentage",
      "browser_usage",
      "browser_percentage",
      "ci_visibility_itr_usage",
      "ci_visibility_itr_percentage",
      "cloud_siem_usage",
      "cloud_siem_percentage",
      "code_security_host_usage",
      "code_security_host_percentage",
      "container_excl_agent_usage",
      "container_excl_agent_percentage",
      "container_usage",
      "container_percentage",
      "cspm_containers_percentage",
      "cspm_containers_usage",
      "cspm_hosts_percentage",
      "cspm_hosts_usage",
      "custom_timeseries_usage",
      "custom_timeseries_percentage",
      "custom_ingested_timeseries_usage",
      "custom_ingested_timeseries_percentage",
      "cws_containers_percentage",
      "cws_containers_usage",
      "cws_fargate_task_percentage",
      "cws_fargate_task_usage",
      "cws_hosts_percentage",
      "cws_hosts_usage",
      "data_jobs_monitoring_usage",
      "data_jobs_monitoring_percentage",
      "data_stream_monitoring_usage",
      "data_stream_monitoring_percentage",
      "dbm_hosts_percentage",
      "dbm_hosts_usage",
      "dbm_queries_percentage",
      "dbm_queries_usage",
      "error_tracking_usage",
      "error_tracking_percentage",
      "estimated_indexed_spans_usage",
      "estimated_indexed_spans_percentage",
      "estimated_ingested_spans_usage",
      "estimated_ingested_spans_percentage",
      "fargate_usage",
      "fargate_percentage",
      "functions_usage",
      "functions_percentage",
      "incident_management_monthly_active_users_usage",
      "incident_management_monthly_active_users_percentage",
      "infra_host_usage",
      "infra_host_percentage",
      "invocations_usage",
      "invocations_percentage",
      "lambda_traced_invocations_usage",
      "lambda_traced_invocations_percentage",
      "mobile_app_testing_percentage",
      "mobile_app_testing_usage",
      "ndm_netflow_usage",
      "ndm_netflow_percentage",
      "npm_host_usage",
      "npm_host_percentage",
      "obs_pipeline_bytes_usage",
      "obs_pipeline_bytes_percentage",
      "obs_pipelines_vcpu_usage",
      "obs_pipelines_vcpu_percentage",
      "online_archive_usage",
      "online_archive_percentage",
      "profiled_container_usage",
      "profiled_container_percentage",
      "profiled_fargate_usage",
      "profiled_fargate_percentage",
      "profiled_host_usage",
      "profiled_host_percentage",
      "serverless_apps_usage",
      "serverless_apps_percentage",
      "snmp_usage",
      "snmp_percentage",
      "universal_service_monitoring_usage",
      "universal_service_monitoring_percentage",
      "vuln_management_hosts_usage",
      "vuln_management_hosts_percentage",
      "sds_scanned_bytes_usage",
      "sds_scanned_bytes_percentage",
      "ci_test_indexed_spans_usage",
      "ci_test_indexed_spans_percentage",
      "ingested_logs_bytes_usage",
      "ingested_logs_bytes_percentage",
      "ci_pipeline_indexed_spans_usage",
      "ci_pipeline_indexed_spans_percentage",
      "indexed_spans_usage",
      "indexed_spans_percentage",
      "custom_event_usage",
      "custom_event_percentage",
      "logs_indexed_custom_retention_usage",
      "logs_indexed_custom_retention_percentage",
      "logs_indexed_360day_usage",
      "logs_indexed_360day_percentage",
      "logs_indexed_180day_usage",
      "logs_indexed_180day_percentage",
      "logs_indexed_90day_usage",
      "logs_indexed_90day_percentage",
      "logs_indexed_60day_usage",
      "logs_indexed_60day_percentage",
      "logs_indexed_45day_usage",
      "logs_indexed_45day_percentage",
      "logs_indexed_30day_usage",
      "logs_indexed_30day_percentage",
      "logs_indexed_15day_usage",
      "logs_indexed_15day_percentage",
      "logs_indexed_7day_usage",
      "logs_indexed_7day_percentage",
      "logs_indexed_3day_usage",
      "logs_indexed_3day_percentage",
      "logs_indexed_1day_usage",
      "logs_indexed_1day_percentage",
      "product_analytics_session_usage",
      "product_analytics_session_percentage",
      "rum_replay_sessions_usage",
      "rum_replay_sessions_percentage",
      "rum_browser_mobile_sessions_usage",
      "rum_browser_mobile_sessions_percentage",
      "ingested_spans_bytes_usage",
      "ingested_spans_bytes_percentage",
      "siem_analyzed_logs_add_on_usage",
      "siem_analyzed_logs_add_on_percentage",
      "siem_ingested_bytes_usage",
      "siem_ingested_bytes_percentage",
      "workflow_executions_usage",
      "workflow_executions_percentage",
      "sca_fargate_usage",
      "sca_fargate_percentage",
      "*",
    ],
    UsageMetricCategory: ["standard", "custom"],
    UsageReportsType: ["reports"],
    UsageSort: ["computed_on", "size", "start_date", "end_date"],
    UsageSortDirection: ["desc", "asc"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    HourlyUsageAttributionBody: HourlyUsageAttributionBody,
    HourlyUsageAttributionMetadata: HourlyUsageAttributionMetadata,
    HourlyUsageAttributionPagination: HourlyUsageAttributionPagination,
    HourlyUsageAttributionResponse: HourlyUsageAttributionResponse,
    LogsByRetention: LogsByRetention,
    LogsByRetentionMonthlyUsage: LogsByRetentionMonthlyUsage,
    LogsByRetentionOrgUsage: LogsByRetentionOrgUsage,
    LogsByRetentionOrgs: LogsByRetentionOrgs,
    LogsRetentionAggSumUsage: LogsRetentionAggSumUsage,
    LogsRetentionSumUsage: LogsRetentionSumUsage,
    MonthlyUsageAttributionBody: MonthlyUsageAttributionBody,
    MonthlyUsageAttributionMetadata: MonthlyUsageAttributionMetadata,
    MonthlyUsageAttributionPagination: MonthlyUsageAttributionPagination,
    MonthlyUsageAttributionResponse: MonthlyUsageAttributionResponse,
    MonthlyUsageAttributionValues: MonthlyUsageAttributionValues,
    UsageAnalyzedLogsHour: UsageAnalyzedLogsHour,
    UsageAnalyzedLogsResponse: UsageAnalyzedLogsResponse,
    UsageAttributionAggregatesBody: UsageAttributionAggregatesBody,
    UsageAuditLogsHour: UsageAuditLogsHour,
    UsageAuditLogsResponse: UsageAuditLogsResponse,
    UsageBillableSummaryBody: UsageBillableSummaryBody,
    UsageBillableSummaryHour: UsageBillableSummaryHour,
    UsageBillableSummaryKeys: UsageBillableSummaryKeys,
    UsageBillableSummaryResponse: UsageBillableSummaryResponse,
    UsageCIVisibilityHour: UsageCIVisibilityHour,
    UsageCIVisibilityResponse: UsageCIVisibilityResponse,
    UsageCWSHour: UsageCWSHour,
    UsageCWSResponse: UsageCWSResponse,
    UsageCloudSecurityPostureManagementHour:
      UsageCloudSecurityPostureManagementHour,
    UsageCloudSecurityPostureManagementResponse:
      UsageCloudSecurityPostureManagementResponse,
    UsageCustomReportsAttributes: UsageCustomReportsAttributes,
    UsageCustomReportsData: UsageCustomReportsData,
    UsageCustomReportsMeta: UsageCustomReportsMeta,
    UsageCustomReportsPage: UsageCustomReportsPage,
    UsageCustomReportsResponse: UsageCustomReportsResponse,
    UsageDBMHour: UsageDBMHour,
    UsageDBMResponse: UsageDBMResponse,
    UsageFargateHour: UsageFargateHour,
    UsageFargateResponse: UsageFargateResponse,
    UsageHostHour: UsageHostHour,
    UsageHostsResponse: UsageHostsResponse,
    UsageIncidentManagementHour: UsageIncidentManagementHour,
    UsageIncidentManagementResponse: UsageIncidentManagementResponse,
    UsageIndexedSpansHour: UsageIndexedSpansHour,
    UsageIndexedSpansResponse: UsageIndexedSpansResponse,
    UsageIngestedSpansHour: UsageIngestedSpansHour,
    UsageIngestedSpansResponse: UsageIngestedSpansResponse,
    UsageIoTHour: UsageIoTHour,
    UsageIoTResponse: UsageIoTResponse,
    UsageLambdaHour: UsageLambdaHour,
    UsageLambdaResponse: UsageLambdaResponse,
    UsageLogsByIndexHour: UsageLogsByIndexHour,
    UsageLogsByIndexResponse: UsageLogsByIndexResponse,
    UsageLogsByRetentionHour: UsageLogsByRetentionHour,
    UsageLogsByRetentionResponse: UsageLogsByRetentionResponse,
    UsageLogsHour: UsageLogsHour,
    UsageLogsResponse: UsageLogsResponse,
    UsageNetworkFlowsHour: UsageNetworkFlowsHour,
    UsageNetworkFlowsResponse: UsageNetworkFlowsResponse,
    UsageNetworkHostsHour: UsageNetworkHostsHour,
    UsageNetworkHostsResponse: UsageNetworkHostsResponse,
    UsageOnlineArchiveHour: UsageOnlineArchiveHour,
    UsageOnlineArchiveResponse: UsageOnlineArchiveResponse,
    UsageProfilingHour: UsageProfilingHour,
    UsageProfilingResponse: UsageProfilingResponse,
    UsageRumSessionsHour: UsageRumSessionsHour,
    UsageRumSessionsResponse: UsageRumSessionsResponse,
    UsageRumUnitsHour: UsageRumUnitsHour,
    UsageRumUnitsResponse: UsageRumUnitsResponse,
    UsageSDSHour: UsageSDSHour,
    UsageSDSResponse: UsageSDSResponse,
    UsageSNMPHour: UsageSNMPHour,
    UsageSNMPResponse: UsageSNMPResponse,
    UsageSpecifiedCustomReportsAttributes:
      UsageSpecifiedCustomReportsAttributes,
    UsageSpecifiedCustomReportsData: UsageSpecifiedCustomReportsData,
    UsageSpecifiedCustomReportsMeta: UsageSpecifiedCustomReportsMeta,
    UsageSpecifiedCustomReportsPage: UsageSpecifiedCustomReportsPage,
    UsageSpecifiedCustomReportsResponse: UsageSpecifiedCustomReportsResponse,
    UsageSummaryDate: UsageSummaryDate,
    UsageSummaryDateOrg: UsageSummaryDateOrg,
    UsageSummaryResponse: UsageSummaryResponse,
    UsageSyntheticsAPIHour: UsageSyntheticsAPIHour,
    UsageSyntheticsAPIResponse: UsageSyntheticsAPIResponse,
    UsageSyntheticsBrowserHour: UsageSyntheticsBrowserHour,
    UsageSyntheticsBrowserResponse: UsageSyntheticsBrowserResponse,
    UsageSyntheticsHour: UsageSyntheticsHour,
    UsageSyntheticsResponse: UsageSyntheticsResponse,
    UsageTimeseriesHour: UsageTimeseriesHour,
    UsageTimeseriesResponse: UsageTimeseriesResponse,
    UsageTopAvgMetricsHour: UsageTopAvgMetricsHour,
    UsageTopAvgMetricsMetadata: UsageTopAvgMetricsMetadata,
    UsageTopAvgMetricsPagination: UsageTopAvgMetricsPagination,
    UsageTopAvgMetricsResponse: UsageTopAvgMetricsResponse,
  },
};
