/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fields in Usage Summary by tag(s).
 */
export class MonthlyUsageAttributionValues {
  /**
   * The percentage of synthetic API test usage by tag(s).
   */
  "apiPercentage"?: number;
  /**
   * The synthetic API test usage by tag(s).
   */
  "apiUsage"?: number;
  /**
   * The percentage of APM ECS Fargate task usage by tag(s).
   */
  "apmFargatePercentage"?: number;
  /**
   * The APM ECS Fargate task usage by tag(s).
   */
  "apmFargateUsage"?: number;
  /**
   * The percentage of APM host usage by tag(s).
   */
  "apmHostPercentage"?: number;
  /**
   * The APM host usage by tag(s).
   */
  "apmHostUsage"?: number;
  /**
   * The percentage of APM and Universal Service Monitoring host usage by tag(s).
   */
  "apmUsmPercentage"?: number;
  /**
   * The APM and Universal Service Monitoring host usage by tag(s).
   */
  "apmUsmUsage"?: number;
  /**
   * The percentage of Application Security Monitoring ECS Fargate task usage by tag(s).
   */
  "appsecFargatePercentage"?: number;
  /**
   * The Application Security Monitoring ECS Fargate task usage by tag(s).
   */
  "appsecFargateUsage"?: number;
  /**
   * The percentage of Application Security Monitoring host usage by tag(s).
   */
  "appsecPercentage"?: number;
  /**
   * The Application Security Monitoring host usage by tag(s).
   */
  "appsecUsage"?: number;
  /**
   * The percentage of Application Security Monitoring Serverless traced invocations usage by tag(s).
   */
  "asmServerlessTracedInvocationsPercentage"?: number;
  /**
   * The Application Security Monitoring Serverless traced invocations usage by tag(s).
   */
  "asmServerlessTracedInvocationsUsage"?: number;
  /**
   * The percentage of synthetic browser test usage by tag(s).
   */
  "browserPercentage"?: number;
  /**
   * The synthetic browser test usage by tag(s).
   */
  "browserUsage"?: number;
  /**
   * The percentage of CI Pipeline Indexed Spans usage by tag(s).
   */
  "ciPipelineIndexedSpansPercentage"?: number;
  /**
   * The total CI Pipeline Indexed Spans usage by tag(s).
   */
  "ciPipelineIndexedSpansUsage"?: number;
  /**
   * The percentage of CI Test Indexed Spans usage by tag(s).
   */
  "ciTestIndexedSpansPercentage"?: number;
  /**
   * The total CI Test Indexed Spans usage by tag(s).
   */
  "ciTestIndexedSpansUsage"?: number;
  /**
   * The percentage of Git committers for Intelligent Test Runner usage by tag(s).
   */
  "ciVisibilityItrPercentage"?: number;
  /**
   * The Git committers for Intelligent Test Runner usage by tag(s).
   */
  "ciVisibilityItrUsage"?: number;
  /**
   * The percentage of Cloud Security Information and Event Management usage by tag(s).
   */
  "cloudSiemPercentage"?: number;
  /**
   * The Cloud Security Information and Event Management usage by tag(s).
   */
  "cloudSiemUsage"?: number;
  /**
   * The percentage of container usage without the Datadog Agent by tag(s).
   */
  "containerExclAgentPercentage"?: number;
  /**
   * The container usage without the Datadog Agent by tag(s).
   */
  "containerExclAgentUsage"?: number;
  /**
   * The percentage of container usage by tag(s).
   */
  "containerPercentage"?: number;
  /**
   * The container usage by tag(s).
   */
  "containerUsage"?: number;
  /**
   * The percentage of Cloud Security Management Pro container usage by tag(s).
   */
  "cspmContainersPercentage"?: number;
  /**
   * The Cloud Security Management Pro container usage by tag(s).
   */
  "cspmContainersUsage"?: number;
  /**
   * The percentage of Cloud Security Management Pro host usage by tag(s).
   */
  "cspmHostsPercentage"?: number;
  /**
   * The Cloud Security Management Pro host usage by tag(s).
   */
  "cspmHostsUsage"?: number;
  /**
   * The percentage of Custom Events usage by tag(s).
   */
  "customEventPercentage"?: number;
  /**
   * The total Custom Events usage by tag(s).
   */
  "customEventUsage"?: number;
  /**
   * The percentage of ingested custom metrics usage by tag(s).
   */
  "customIngestedTimeseriesPercentage"?: number;
  /**
   * The ingested custom metrics usage by tag(s).
   */
  "customIngestedTimeseriesUsage"?: number;
  /**
   * The percentage of indexed custom metrics usage by tag(s).
   */
  "customTimeseriesPercentage"?: number;
  /**
   * The indexed custom metrics usage by tag(s).
   */
  "customTimeseriesUsage"?: number;
  /**
   * The percentage of Cloud Workload Security container usage by tag(s).
   */
  "cwsContainersPercentage"?: number;
  /**
   * The Cloud Workload Security container usage by tag(s).
   */
  "cwsContainersUsage"?: number;
  /**
   * The percentage of Cloud Workload Security host usage by tag(s).
   */
  "cwsHostsPercentage"?: number;
  /**
   * The Cloud Workload Security host usage by tag(s).
   */
  "cwsHostsUsage"?: number;
  /**
   * The Data Jobs Monitoring usage by tag(s).
   */
  "dataJobsMonitoringUsage"?: number;
  /**
   * The Data Stream Monitoring usage by tag(s).
   */
  "dataStreamMonitoringUsage"?: number;
  /**
   * The percentage of Database Monitoring host usage by tag(s).
   */
  "dbmHostsPercentage"?: number;
  /**
   * The Database Monitoring host usage by tag(s).
   */
  "dbmHostsUsage"?: number;
  /**
   * The percentage of Database Monitoring queries usage by tag(s).
   */
  "dbmQueriesPercentage"?: number;
  /**
   * The Database Monitoring queries usage by tag(s).
   */
  "dbmQueriesUsage"?: number;
  /**
   * The percentage of error tracking events usage by tag(s).
   */
  "errorTrackingPercentage"?: number;
  /**
   * The error tracking events usage by tag(s).
   */
  "errorTrackingUsage"?: number;
  /**
   * The percentage of estimated live indexed logs usage by tag(s).
   */
  "estimatedIndexedLogsPercentage"?: number;
  /**
   * The estimated live indexed logs usage by tag(s).
   */
  "estimatedIndexedLogsUsage"?: number;
  /**
   * The percentage of estimated indexed spans usage by tag(s).
   */
  "estimatedIndexedSpansPercentage"?: number;
  /**
   * The estimated indexed spans usage by tag(s).
   */
  "estimatedIndexedSpansUsage"?: number;
  /**
   * The percentage of estimated live ingested logs usage by tag(s).
   */
  "estimatedIngestedLogsPercentage"?: number;
  /**
   * The estimated live ingested logs usage by tag(s).
   */
  "estimatedIngestedLogsUsage"?: number;
  /**
   * The percentage of estimated ingested spans usage by tag(s).
   */
  "estimatedIngestedSpansPercentage"?: number;
  /**
   * The estimated ingested spans usage by tag(s).
   */
  "estimatedIngestedSpansUsage"?: number;
  /**
   * The percentage of estimated rum sessions usage by tag(s).
   */
  "estimatedRumSessionsPercentage"?: number;
  /**
   * The estimated rum sessions usage by tag(s).
   */
  "estimatedRumSessionsUsage"?: number;
  /**
   * The percentage of Fargate usage by tags.
   */
  "fargatePercentage"?: number;
  /**
   * The Fargate usage by tags.
   */
  "fargateUsage"?: number;
  /**
   * The percentage of Lambda function usage by tag(s).
   */
  "functionsPercentage"?: number;
  /**
   * The Lambda function usage by tag(s).
   */
  "functionsUsage"?: number;
  /**
   * The percentage of Incident Management monthly active users usage by tag(s).
   */
  "incidentManagementMonthlyActiveUsersPercentage"?: number;
  /**
   * The Incident Management monthly active users usage by tag(s).
   */
  "incidentManagementMonthlyActiveUsersUsage"?: number;
  /**
   * The percentage of APM Indexed Spans usage by tag(s).
   */
  "indexedSpansPercentage"?: number;
  /**
   * The total APM Indexed Spans usage by tag(s).
   */
  "indexedSpansUsage"?: number;
  /**
   * The percentage of infrastructure host usage by tag(s).
   */
  "infraHostPercentage"?: number;
  /**
   * The infrastructure host usage by tag(s).
   */
  "infraHostUsage"?: number;
  /**
   * The percentage of Ingested Logs usage by tag(s).
   */
  "ingestedLogsBytesPercentage"?: number;
  /**
   * The total Ingested Logs usage by tag(s).
   */
  "ingestedLogsBytesUsage"?: number;
  /**
   * The percentage of APM Ingested Spans usage by tag(s).
   */
  "ingestedSpansBytesPercentage"?: number;
  /**
   * The total APM Ingested Spans usage by tag(s).
   */
  "ingestedSpansBytesUsage"?: number;
  /**
   * The percentage of Lambda invocation usage by tag(s).
   */
  "invocationsPercentage"?: number;
  /**
   * The Lambda invocation usage by tag(s).
   */
  "invocationsUsage"?: number;
  /**
   * The percentage of Serverless APM usage by tag(s).
   */
  "lambdaTracedInvocationsPercentage"?: number;
  /**
   * The Serverless APM usage by tag(s).
   */
  "lambdaTracedInvocationsUsage"?: number;
  /**
   * The percentage of Indexed Logs (15-day Retention) usage by tag(s).
   */
  "logsIndexed15dayPercentage"?: number;
  /**
   * The total Indexed Logs (15-day Retention) usage by tag(s).
   */
  "logsIndexed15dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (180-day Retention) usage by tag(s).
   */
  "logsIndexed180dayPercentage"?: number;
  /**
   * The total Indexed Logs (180-day Retention) usage by tag(s).
   */
  "logsIndexed180dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (1-day Retention) usage by tag(s).
   */
  "logsIndexed1dayPercentage"?: number;
  /**
   * The total Indexed Logs (1-day Retention) usage by tag(s).
   */
  "logsIndexed1dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (30-day Retention) usage by tag(s).
   */
  "logsIndexed30dayPercentage"?: number;
  /**
   * The total Indexed Logs (30-day Retention) usage by tag(s).
   */
  "logsIndexed30dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (360-day Retention) usage by tag(s).
   */
  "logsIndexed360dayPercentage"?: number;
  /**
   * The total Indexed Logs (360-day Retention) usage by tag(s).
   */
  "logsIndexed360dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (3-day Retention) usage by tag(s).
   */
  "logsIndexed3dayPercentage"?: number;
  /**
   * The total Indexed Logs (3-day Retention) usage by tag(s).
   */
  "logsIndexed3dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (45-day Retention) usage by tag(s).
   */
  "logsIndexed45dayPercentage"?: number;
  /**
   * The total Indexed Logs (45-day Retention) usage by tag(s).
   */
  "logsIndexed45dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (60-day Retention) usage by tag(s).
   */
  "logsIndexed60dayPercentage"?: number;
  /**
   * The total Indexed Logs (60-day Retention) usage by tag(s).
   */
  "logsIndexed60dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (7-day Retention) usage by tag(s).
   */
  "logsIndexed7dayPercentage"?: number;
  /**
   * The total Indexed Logs (7-day Retention) usage by tag(s).
   */
  "logsIndexed7dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (90-day Retention) usage by tag(s).
   */
  "logsIndexed90dayPercentage"?: number;
  /**
   * The total Indexed Logs (90-day Retention) usage by tag(s).
   */
  "logsIndexed90dayUsage"?: number;
  /**
   * The percentage of Indexed Logs (Custom Retention) usage by tag(s).
   */
  "logsIndexedCustomRetentionPercentage"?: number;
  /**
   * The total Indexed Logs (Custom Retention) usage by tag(s).
   */
  "logsIndexedCustomRetentionUsage"?: number;
  /**
   * The percentage of Synthetic mobile application test usage by tag(s).
   */
  "mobileAppTestingPercentage"?: number;
  /**
   * The Synthetic mobile application test usage by tag(s).
   */
  "mobileAppTestingUsage"?: number;
  /**
   * The percentage of Network Device Monitoring NetFlow usage by tag(s).
   */
  "ndmNetflowPercentage"?: number;
  /**
   * The Network Device Monitoring NetFlow usage by tag(s).
   */
  "ndmNetflowUsage"?: number;
  /**
   * The percentage of network host usage by tag(s).
   */
  "npmHostPercentage"?: number;
  /**
   * The network host usage by tag(s).
   */
  "npmHostUsage"?: number;
  /**
   * The percentage of observability pipeline bytes usage by tag(s).
   */
  "obsPipelineBytesPercentage"?: number;
  /**
   * The observability pipeline bytes usage by tag(s).
   */
  "obsPipelineBytesUsage"?: number;
  /**
   * The percentage of observability pipeline per core usage by tag(s).
   */
  "obsPipelinesVcpuPercentage"?: number;
  /**
   * The observability pipeline per core usage by tag(s).
   */
  "obsPipelinesVcpuUsage"?: number;
  /**
   * The percentage of online archive usage by tag(s).
   */
  "onlineArchivePercentage"?: number;
  /**
   * The online archive usage by tag(s).
   */
  "onlineArchiveUsage"?: number;
  /**
   * The percentage of profiled container usage by tag(s).
   */
  "profiledContainerPercentage"?: number;
  /**
   * The profiled container usage by tag(s).
   */
  "profiledContainerUsage"?: number;
  /**
   * The percentage of profiled Fargate task usage by tag(s).
   */
  "profiledFargatePercentage"?: number;
  /**
   * The profiled Fargate task usage by tag(s).
   */
  "profiledFargateUsage"?: number;
  /**
   * The percentage of profiled hosts usage by tag(s).
   */
  "profiledHostPercentage"?: number;
  /**
   * The profiled hosts usage by tag(s).
   */
  "profiledHostUsage"?: number;
  /**
   * The percentage of RUM Browser and Mobile usage by tag(s).
   */
  "rumBrowserMobileSessionsPercentage"?: number;
  /**
   * The total RUM Browser and Mobile usage by tag(s).
   */
  "rumBrowserMobileSessionsUsage"?: number;
  /**
   * The percentage of RUM Session Replay usage by tag(s).
   */
  "rumReplaySessionsPercentage"?: number;
  /**
   * The total RUM Session Replay usage by tag(s).
   */
  "rumReplaySessionsUsage"?: number;
  /**
   * The percentage of Software Composition Analysis Fargate task usage by tag(s).
   */
  "scaFargatePercentage"?: number;
  /**
   * The total Software Composition Analysis Fargate task usage by tag(s).
   */
  "scaFargateUsage"?: number;
  /**
   * The percentage of Sensitive Data Scanner usage by tag(s).
   */
  "sdsScannedBytesPercentage"?: number;
  /**
   * The total Sensitive Data Scanner usage by tag(s).
   */
  "sdsScannedBytesUsage"?: number;
  /**
   * The percentage of Serverless Apps usage by tag(s).
   */
  "serverlessAppsPercentage"?: number;
  /**
   * The total Serverless Apps usage by tag(s).
   */
  "serverlessAppsUsage"?: number;
  /**
   * The percentage of log events analyzed by Cloud SIEM usage by tag(s).
   */
  "siemAnalyzedLogsAddOnPercentage"?: number;
  /**
   * The log events analyzed by Cloud SIEM usage by tag(s).
   */
  "siemAnalyzedLogsAddOnUsage"?: number;
  /**
   * The percentage of SIEM usage by tag(s).
   */
  "siemIngestedBytesPercentage"?: number;
  /**
   * The total SIEM usage by tag(s).
   */
  "siemIngestedBytesUsage"?: number;
  /**
   * The percentage of network device usage by tag(s).
   */
  "snmpPercentage"?: number;
  /**
   * The network device usage by tag(s).
   */
  "snmpUsage"?: number;
  /**
   * The percentage of universal service monitoring usage by tag(s).
   */
  "universalServiceMonitoringPercentage"?: number;
  /**
   * The universal service monitoring usage by tag(s).
   */
  "universalServiceMonitoringUsage"?: number;
  /**
   * The percentage of Application Vulnerability Management usage by tag(s).
   */
  "vulnManagementHostsPercentage"?: number;
  /**
   * The Application Vulnerability Management usage by tag(s).
   */
  "vulnManagementHostsUsage"?: number;
  /**
   * The percentage of workflow executions usage by tag(s).
   */
  "workflowExecutionsPercentage"?: number;
  /**
   * The total workflow executions usage by tag(s).
   */
  "workflowExecutionsUsage"?: number;

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
    apiPercentage: {
      baseName: "api_percentage",
      type: "number",
      format: "double",
    },
    apiUsage: {
      baseName: "api_usage",
      type: "number",
      format: "double",
    },
    apmFargatePercentage: {
      baseName: "apm_fargate_percentage",
      type: "number",
      format: "double",
    },
    apmFargateUsage: {
      baseName: "apm_fargate_usage",
      type: "number",
      format: "double",
    },
    apmHostPercentage: {
      baseName: "apm_host_percentage",
      type: "number",
      format: "double",
    },
    apmHostUsage: {
      baseName: "apm_host_usage",
      type: "number",
      format: "double",
    },
    apmUsmPercentage: {
      baseName: "apm_usm_percentage",
      type: "number",
      format: "double",
    },
    apmUsmUsage: {
      baseName: "apm_usm_usage",
      type: "number",
      format: "double",
    },
    appsecFargatePercentage: {
      baseName: "appsec_fargate_percentage",
      type: "number",
      format: "double",
    },
    appsecFargateUsage: {
      baseName: "appsec_fargate_usage",
      type: "number",
      format: "double",
    },
    appsecPercentage: {
      baseName: "appsec_percentage",
      type: "number",
      format: "double",
    },
    appsecUsage: {
      baseName: "appsec_usage",
      type: "number",
      format: "double",
    },
    asmServerlessTracedInvocationsPercentage: {
      baseName: "asm_serverless_traced_invocations_percentage",
      type: "number",
      format: "double",
    },
    asmServerlessTracedInvocationsUsage: {
      baseName: "asm_serverless_traced_invocations_usage",
      type: "number",
      format: "double",
    },
    browserPercentage: {
      baseName: "browser_percentage",
      type: "number",
      format: "double",
    },
    browserUsage: {
      baseName: "browser_usage",
      type: "number",
      format: "double",
    },
    ciPipelineIndexedSpansPercentage: {
      baseName: "ci_pipeline_indexed_spans_percentage",
      type: "number",
      format: "double",
    },
    ciPipelineIndexedSpansUsage: {
      baseName: "ci_pipeline_indexed_spans_usage",
      type: "number",
      format: "double",
    },
    ciTestIndexedSpansPercentage: {
      baseName: "ci_test_indexed_spans_percentage",
      type: "number",
      format: "double",
    },
    ciTestIndexedSpansUsage: {
      baseName: "ci_test_indexed_spans_usage",
      type: "number",
      format: "double",
    },
    ciVisibilityItrPercentage: {
      baseName: "ci_visibility_itr_percentage",
      type: "number",
      format: "double",
    },
    ciVisibilityItrUsage: {
      baseName: "ci_visibility_itr_usage",
      type: "number",
      format: "double",
    },
    cloudSiemPercentage: {
      baseName: "cloud_siem_percentage",
      type: "number",
      format: "double",
    },
    cloudSiemUsage: {
      baseName: "cloud_siem_usage",
      type: "number",
      format: "double",
    },
    containerExclAgentPercentage: {
      baseName: "container_excl_agent_percentage",
      type: "number",
      format: "double",
    },
    containerExclAgentUsage: {
      baseName: "container_excl_agent_usage",
      type: "number",
      format: "double",
    },
    containerPercentage: {
      baseName: "container_percentage",
      type: "number",
      format: "double",
    },
    containerUsage: {
      baseName: "container_usage",
      type: "number",
      format: "double",
    },
    cspmContainersPercentage: {
      baseName: "cspm_containers_percentage",
      type: "number",
      format: "double",
    },
    cspmContainersUsage: {
      baseName: "cspm_containers_usage",
      type: "number",
      format: "double",
    },
    cspmHostsPercentage: {
      baseName: "cspm_hosts_percentage",
      type: "number",
      format: "double",
    },
    cspmHostsUsage: {
      baseName: "cspm_hosts_usage",
      type: "number",
      format: "double",
    },
    customEventPercentage: {
      baseName: "custom_event_percentage",
      type: "number",
      format: "double",
    },
    customEventUsage: {
      baseName: "custom_event_usage",
      type: "number",
      format: "double",
    },
    customIngestedTimeseriesPercentage: {
      baseName: "custom_ingested_timeseries_percentage",
      type: "number",
      format: "double",
    },
    customIngestedTimeseriesUsage: {
      baseName: "custom_ingested_timeseries_usage",
      type: "number",
      format: "double",
    },
    customTimeseriesPercentage: {
      baseName: "custom_timeseries_percentage",
      type: "number",
      format: "double",
    },
    customTimeseriesUsage: {
      baseName: "custom_timeseries_usage",
      type: "number",
      format: "double",
    },
    cwsContainersPercentage: {
      baseName: "cws_containers_percentage",
      type: "number",
      format: "double",
    },
    cwsContainersUsage: {
      baseName: "cws_containers_usage",
      type: "number",
      format: "double",
    },
    cwsHostsPercentage: {
      baseName: "cws_hosts_percentage",
      type: "number",
      format: "double",
    },
    cwsHostsUsage: {
      baseName: "cws_hosts_usage",
      type: "number",
      format: "double",
    },
    dataJobsMonitoringUsage: {
      baseName: "data_jobs_monitoring_usage",
      type: "number",
      format: "double",
    },
    dataStreamMonitoringUsage: {
      baseName: "data_stream_monitoring_usage",
      type: "number",
      format: "double",
    },
    dbmHostsPercentage: {
      baseName: "dbm_hosts_percentage",
      type: "number",
      format: "double",
    },
    dbmHostsUsage: {
      baseName: "dbm_hosts_usage",
      type: "number",
      format: "double",
    },
    dbmQueriesPercentage: {
      baseName: "dbm_queries_percentage",
      type: "number",
      format: "double",
    },
    dbmQueriesUsage: {
      baseName: "dbm_queries_usage",
      type: "number",
      format: "double",
    },
    errorTrackingPercentage: {
      baseName: "error_tracking_percentage",
      type: "number",
      format: "double",
    },
    errorTrackingUsage: {
      baseName: "error_tracking_usage",
      type: "number",
      format: "double",
    },
    estimatedIndexedLogsPercentage: {
      baseName: "estimated_indexed_logs_percentage",
      type: "number",
      format: "double",
    },
    estimatedIndexedLogsUsage: {
      baseName: "estimated_indexed_logs_usage",
      type: "number",
      format: "double",
    },
    estimatedIndexedSpansPercentage: {
      baseName: "estimated_indexed_spans_percentage",
      type: "number",
      format: "double",
    },
    estimatedIndexedSpansUsage: {
      baseName: "estimated_indexed_spans_usage",
      type: "number",
      format: "double",
    },
    estimatedIngestedLogsPercentage: {
      baseName: "estimated_ingested_logs_percentage",
      type: "number",
      format: "double",
    },
    estimatedIngestedLogsUsage: {
      baseName: "estimated_ingested_logs_usage",
      type: "number",
      format: "double",
    },
    estimatedIngestedSpansPercentage: {
      baseName: "estimated_ingested_spans_percentage",
      type: "number",
      format: "double",
    },
    estimatedIngestedSpansUsage: {
      baseName: "estimated_ingested_spans_usage",
      type: "number",
      format: "double",
    },
    estimatedRumSessionsPercentage: {
      baseName: "estimated_rum_sessions_percentage",
      type: "number",
      format: "double",
    },
    estimatedRumSessionsUsage: {
      baseName: "estimated_rum_sessions_usage",
      type: "number",
      format: "double",
    },
    fargatePercentage: {
      baseName: "fargate_percentage",
      type: "number",
      format: "double",
    },
    fargateUsage: {
      baseName: "fargate_usage",
      type: "number",
      format: "double",
    },
    functionsPercentage: {
      baseName: "functions_percentage",
      type: "number",
      format: "double",
    },
    functionsUsage: {
      baseName: "functions_usage",
      type: "number",
      format: "double",
    },
    incidentManagementMonthlyActiveUsersPercentage: {
      baseName: "incident_management_monthly_active_users_percentage",
      type: "number",
      format: "double",
    },
    incidentManagementMonthlyActiveUsersUsage: {
      baseName: "incident_management_monthly_active_users_usage",
      type: "number",
      format: "double",
    },
    indexedSpansPercentage: {
      baseName: "indexed_spans_percentage",
      type: "number",
      format: "double",
    },
    indexedSpansUsage: {
      baseName: "indexed_spans_usage",
      type: "number",
      format: "double",
    },
    infraHostPercentage: {
      baseName: "infra_host_percentage",
      type: "number",
      format: "double",
    },
    infraHostUsage: {
      baseName: "infra_host_usage",
      type: "number",
      format: "double",
    },
    ingestedLogsBytesPercentage: {
      baseName: "ingested_logs_bytes_percentage",
      type: "number",
      format: "double",
    },
    ingestedLogsBytesUsage: {
      baseName: "ingested_logs_bytes_usage",
      type: "number",
      format: "double",
    },
    ingestedSpansBytesPercentage: {
      baseName: "ingested_spans_bytes_percentage",
      type: "number",
      format: "double",
    },
    ingestedSpansBytesUsage: {
      baseName: "ingested_spans_bytes_usage",
      type: "number",
      format: "double",
    },
    invocationsPercentage: {
      baseName: "invocations_percentage",
      type: "number",
      format: "double",
    },
    invocationsUsage: {
      baseName: "invocations_usage",
      type: "number",
      format: "double",
    },
    lambdaTracedInvocationsPercentage: {
      baseName: "lambda_traced_invocations_percentage",
      type: "number",
      format: "double",
    },
    lambdaTracedInvocationsUsage: {
      baseName: "lambda_traced_invocations_usage",
      type: "number",
      format: "double",
    },
    logsIndexed15dayPercentage: {
      baseName: "logs_indexed_15day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed15dayUsage: {
      baseName: "logs_indexed_15day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed180dayPercentage: {
      baseName: "logs_indexed_180day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed180dayUsage: {
      baseName: "logs_indexed_180day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed1dayPercentage: {
      baseName: "logs_indexed_1day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed1dayUsage: {
      baseName: "logs_indexed_1day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed30dayPercentage: {
      baseName: "logs_indexed_30day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed30dayUsage: {
      baseName: "logs_indexed_30day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed360dayPercentage: {
      baseName: "logs_indexed_360day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed360dayUsage: {
      baseName: "logs_indexed_360day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed3dayPercentage: {
      baseName: "logs_indexed_3day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed3dayUsage: {
      baseName: "logs_indexed_3day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed45dayPercentage: {
      baseName: "logs_indexed_45day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed45dayUsage: {
      baseName: "logs_indexed_45day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed60dayPercentage: {
      baseName: "logs_indexed_60day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed60dayUsage: {
      baseName: "logs_indexed_60day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed7dayPercentage: {
      baseName: "logs_indexed_7day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed7dayUsage: {
      baseName: "logs_indexed_7day_usage",
      type: "number",
      format: "double",
    },
    logsIndexed90dayPercentage: {
      baseName: "logs_indexed_90day_percentage",
      type: "number",
      format: "double",
    },
    logsIndexed90dayUsage: {
      baseName: "logs_indexed_90day_usage",
      type: "number",
      format: "double",
    },
    logsIndexedCustomRetentionPercentage: {
      baseName: "logs_indexed_custom_retention_percentage",
      type: "number",
      format: "double",
    },
    logsIndexedCustomRetentionUsage: {
      baseName: "logs_indexed_custom_retention_usage",
      type: "number",
      format: "double",
    },
    mobileAppTestingPercentage: {
      baseName: "mobile_app_testing_percentage",
      type: "number",
      format: "double",
    },
    mobileAppTestingUsage: {
      baseName: "mobile_app_testing_usage",
      type: "number",
      format: "double",
    },
    ndmNetflowPercentage: {
      baseName: "ndm_netflow_percentage",
      type: "number",
      format: "double",
    },
    ndmNetflowUsage: {
      baseName: "ndm_netflow_usage",
      type: "number",
      format: "double",
    },
    npmHostPercentage: {
      baseName: "npm_host_percentage",
      type: "number",
      format: "double",
    },
    npmHostUsage: {
      baseName: "npm_host_usage",
      type: "number",
      format: "double",
    },
    obsPipelineBytesPercentage: {
      baseName: "obs_pipeline_bytes_percentage",
      type: "number",
      format: "double",
    },
    obsPipelineBytesUsage: {
      baseName: "obs_pipeline_bytes_usage",
      type: "number",
      format: "double",
    },
    obsPipelinesVcpuPercentage: {
      baseName: "obs_pipelines_vcpu_percentage",
      type: "number",
      format: "double",
    },
    obsPipelinesVcpuUsage: {
      baseName: "obs_pipelines_vcpu_usage",
      type: "number",
      format: "double",
    },
    onlineArchivePercentage: {
      baseName: "online_archive_percentage",
      type: "number",
      format: "double",
    },
    onlineArchiveUsage: {
      baseName: "online_archive_usage",
      type: "number",
      format: "double",
    },
    profiledContainerPercentage: {
      baseName: "profiled_container_percentage",
      type: "number",
      format: "double",
    },
    profiledContainerUsage: {
      baseName: "profiled_container_usage",
      type: "number",
      format: "double",
    },
    profiledFargatePercentage: {
      baseName: "profiled_fargate_percentage",
      type: "number",
      format: "double",
    },
    profiledFargateUsage: {
      baseName: "profiled_fargate_usage",
      type: "number",
      format: "double",
    },
    profiledHostPercentage: {
      baseName: "profiled_host_percentage",
      type: "number",
      format: "double",
    },
    profiledHostUsage: {
      baseName: "profiled_host_usage",
      type: "number",
      format: "double",
    },
    rumBrowserMobileSessionsPercentage: {
      baseName: "rum_browser_mobile_sessions_percentage",
      type: "number",
      format: "double",
    },
    rumBrowserMobileSessionsUsage: {
      baseName: "rum_browser_mobile_sessions_usage",
      type: "number",
      format: "double",
    },
    rumReplaySessionsPercentage: {
      baseName: "rum_replay_sessions_percentage",
      type: "number",
      format: "double",
    },
    rumReplaySessionsUsage: {
      baseName: "rum_replay_sessions_usage",
      type: "number",
      format: "double",
    },
    scaFargatePercentage: {
      baseName: "sca_fargate_percentage",
      type: "number",
      format: "double",
    },
    scaFargateUsage: {
      baseName: "sca_fargate_usage",
      type: "number",
      format: "double",
    },
    sdsScannedBytesPercentage: {
      baseName: "sds_scanned_bytes_percentage",
      type: "number",
      format: "double",
    },
    sdsScannedBytesUsage: {
      baseName: "sds_scanned_bytes_usage",
      type: "number",
      format: "double",
    },
    serverlessAppsPercentage: {
      baseName: "serverless_apps_percentage",
      type: "number",
      format: "double",
    },
    serverlessAppsUsage: {
      baseName: "serverless_apps_usage",
      type: "number",
      format: "double",
    },
    siemAnalyzedLogsAddOnPercentage: {
      baseName: "siem_analyzed_logs_add_on_percentage",
      type: "number",
      format: "double",
    },
    siemAnalyzedLogsAddOnUsage: {
      baseName: "siem_analyzed_logs_add_on_usage",
      type: "number",
      format: "double",
    },
    siemIngestedBytesPercentage: {
      baseName: "siem_ingested_bytes_percentage",
      type: "number",
      format: "double",
    },
    siemIngestedBytesUsage: {
      baseName: "siem_ingested_bytes_usage",
      type: "number",
      format: "double",
    },
    snmpPercentage: {
      baseName: "snmp_percentage",
      type: "number",
      format: "double",
    },
    snmpUsage: {
      baseName: "snmp_usage",
      type: "number",
      format: "double",
    },
    universalServiceMonitoringPercentage: {
      baseName: "universal_service_monitoring_percentage",
      type: "number",
      format: "double",
    },
    universalServiceMonitoringUsage: {
      baseName: "universal_service_monitoring_usage",
      type: "number",
      format: "double",
    },
    vulnManagementHostsPercentage: {
      baseName: "vuln_management_hosts_percentage",
      type: "number",
      format: "double",
    },
    vulnManagementHostsUsage: {
      baseName: "vuln_management_hosts_usage",
      type: "number",
      format: "double",
    },
    workflowExecutionsPercentage: {
      baseName: "workflow_executions_percentage",
      type: "number",
      format: "double",
    },
    workflowExecutionsUsage: {
      baseName: "workflow_executions_usage",
      type: "number",
      format: "double",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionValues.attributeTypeMap;
  }

  public constructor() {}
}
