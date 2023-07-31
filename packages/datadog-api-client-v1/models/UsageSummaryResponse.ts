/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsByRetention } from "./LogsByRetention";
import { UsageSummaryDate } from "./UsageSummaryDate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response summarizing all usage aggregated across the months in the request for all organizations, and broken down by month and by organization.
 */
export class UsageSummaryResponse {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current months for all organizations.
   */
  "agentHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current months all organizations.
   */
  "apmAzureAppServiceHostTop99pSum"?: number;
  /**
   * Shows the average of all APM ECS Fargate tasks over all hours in the current months for all organizations.
   */
  "apmFargateCountAvgSum"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current months for all organizations.
   */
  "apmHostTop99pSum"?: number;
  /**
   * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current months for all organizations.
   */
  "appsecFargateCountAvgSum"?: number;
  /**
   * Shows the sum of all audit logs lines indexed over all hours in the current months for all organizations.
   */
  "auditLogsLinesIndexedAggSum"?: number;
  /**
   * Shows the total number of organizations that had Audit Trail enabled over a specific number of months.
   */
  "auditTrailEnabledHwmSum"?: number;
  /**
   * Shows the average of all profiled Fargate tasks over all hours in the current months for all organizations.
   */
  "avgProfiledFargateTasksSum"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current months for all organizations.
   */
  "awsHostTop99pSum"?: number;
  /**
   * Shows the average of the number of functions that executed 1 or more times each hour in the current months for all organizations.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current months for all organizations.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current months for all organizations.
   */
  "azureAppServiceTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Azure hosts over all hours in the current months for all organizations.
   */
  "azureHostTop99pSum"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current months for all organizations.
   */
  "billableIngestedBytesAggSum"?: number;
  /**
   * Shows the sum of all browser lite sessions over all hours in the current months for all organizations.
   */
  "browserRumLiteSessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser replay sessions over all hours in the current months for all organizations.
   */
  "browserRumReplaySessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser RUM units over all hours in the current months for all organizations.
   */
  "browserRumUnitsAggSum"?: number;
  /**
   * Shows the sum of all CI pipeline indexed spans over all hours in the current months for all organizations.
   */
  "ciPipelineIndexedSpansAggSum"?: number;
  /**
   * Shows the sum of all CI test indexed spans over all hours in the current months for all organizations.
   */
  "ciTestIndexedSpansAggSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current months for all organizations.
   */
  "ciVisibilityItrCommittersHwmSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current months for all organizations.
   */
  "ciVisibilityPipelineCommittersHwmSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current months for all organizations.
   */
  "ciVisibilityTestCommittersHwmSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for AWS.
   */
  "cloudCostManagementAwsHostCountAvgSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for Azure.
   */
  "cloudCostManagementAzureHostCountAvgSum"?: number;
  /**
   * Sum of the host count average for Cloud Cost Management for all cloud providers.
   */
  "cloudCostManagementHostCountAvgSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current months for all organizations.
   */
  "containerAvgSum"?: number;
  /**
   * Shows the average of the containers without the Datadog Agent over all hours in the current month for all organizations.
   */
  "containerExclAgentAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all distinct containers over all hours in the current months for all organizations.
   */
  "containerHwmSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management Azure app services hosts over all hours in the current months for all organizations.
   */
  "cspmAasHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management AWS hosts over all hours in the current months for all organizations.
   */
  "cspmAwsHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management Azure hosts over all hours in the current months for all organizations.
   */
  "cspmAzureHostTop99pSum"?: number;
  /**
   * Shows the average number of Cloud Security Posture Management containers over all hours in the current months for all organizations.
   */
  "cspmContainerAvgSum"?: number;
  /**
   * Shows the sum of the the high-water marks of Cloud Security Posture Management containers over all hours in the current months for all organizations.
   */
  "cspmContainerHwmSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management GCP hosts over all hours in the current months for all organizations.
   */
  "cspmGcpHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management hosts over all hours in the current months for all organizations.
   */
  "cspmHostTop99pSum"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current months for all organizations.
   */
  "customTsSum"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current months for all organizations.
   */
  "cwsContainersAvgSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current months for all organizations.
   */
  "cwsHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current month for all organizations.
   */
  "dbmHostTop99pSum"?: number;
  /**
   * Shows the average of all distinct Database Monitoring Normalized Queries over all hours in the current month for all organizations.
   */
  "dbmQueriesAvgSum"?: number;
  /**
   * Shows the last date of usage in the current months for all organizations.
   */
  "endDate"?: Date;
  /**
   * Shows the average of all Fargate tasks over all hours in the current months for all organizations.
   */
  "fargateTasksCountAvgSum"?: number;
  /**
   * Shows the sum of the high-water marks of all Fargate tasks over all hours in the current months for all organizations.
   */
  "fargateTasksCountHwmSum"?: number;
  /**
   * Shows the sum of all logs forwarding bytes over all hours in the current months for all organizations (data available as of April 1, 2023)
   */
  "forwardingEventsBytesAggSum"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current months for all organizations.
   */
  "gcpHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current months for all organizations.
   */
  "herokuHostTop99pSum"?: number;
  /**
   * Shows sum of the the high-water marks of incident management monthly active users in the current months for all organizations.
   */
  "incidentManagementMonthlyActiveUsersHwmSum"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current months for all organizations.
   */
  "indexedEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current months for all organizations.
   */
  "infraHostTop99pSum"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current months for all organizations.
   */
  "ingestedEventsBytesAggSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current months for all organizations.
   */
  "iotDeviceAggSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current months of all organizations.
   */
  "iotDeviceTop99pSum"?: number;
  /**
   * Shows the the most recent hour in the current months for all organizations for which all usages were calculated.
   */
  "lastUpdated"?: Date;
  /**
   * Shows the sum of all live logs indexed over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "liveIndexedEventsAggSum"?: number;
  /**
   * Shows the sum of all live logs bytes ingested over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "liveIngestedBytesAggSum"?: number;
  /**
   * Object containing logs usage data broken down by retention period.
   */
  "logsByRetention"?: LogsByRetention;
  /**
   * Shows the sum of all mobile lite sessions over all hours in the current months for all organizations.
   */
  "mobileRumLiteSessionCountAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountAndroidAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Flutter over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountFlutterAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountIosAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on React Native over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountReactnativeAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Roku over all hours in the current months for all organizations.
   */
  "mobileRumSessionCountRokuAggSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current months for all organizations.
   */
  "mobileRumUnitsAggSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current months for all organizations.
   */
  "netflowIndexedEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current months for all organizations.
   */
  "npmHostTop99pSum"?: number;
  /**
   * Sum of all observability pipelines bytes processed over all hours in the current months for all organizations.
   */
  "observabilityPipelinesBytesProcessedAggSum"?: number;
  /**
   * Sum of all online archived events over all hours in the current months for all organizations.
   */
  "onlineArchiveEventsCountAggSum"?: number;
  /**
   * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current months for all organizations.
   */
  "opentelemetryApmHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current months for all organizations.
   */
  "opentelemetryHostTop99pSum"?: number;
  /**
   * Shows the average number of profiled containers over all hours in the current months for all organizations.
   */
  "profilingContainerAgentCountAvg"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current months for all organizations.
   */
  "profilingHostCountTop99pSum"?: number;
  /**
   * Shows the sum of all rehydrated logs indexed over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "rehydratedIndexedEventsAggSum"?: number;
  /**
   * Shows the sum of all rehydrated logs bytes ingested over all hours in the current months for all organizations (data available as of December 1, 2020).
   */
  "rehydratedIngestedBytesAggSum"?: number;
  /**
   * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations.
   */
  "rumBrowserAndMobileSessionCount"?: number;
  /**
   * Shows the sum of all browser RUM Lite Sessions over all hours in the current months for all organizations.
   */
  "rumSessionCountAggSum"?: number;
  /**
   * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current months for all organizations.
   */
  "rumTotalSessionCountAggSum"?: number;
  /**
   * Shows the sum of all browser and mobile RUM units over all hours in the current months for all organizations.
   */
  "rumUnitsAggSum"?: number;
  /**
   * Sum of all APM bytes scanned with sensitive data scanner in the current months for all organizations.
   */
  "sdsApmScannedBytesSum"?: number;
  /**
   * Sum of all event stream events bytes scanned with sensitive data scanner in the current months for all organizations.
   */
  "sdsEventsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Sum of all RUM bytes scanned with sensitive data scanner in the current months for all organizations.
   */
  "sdsRumScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsTotalScannedBytesSum"?: number;
  /**
   * Shows the first date of usage in the current months for all organizations.
   */
  "startDate"?: Date;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current months for all organizations.
   */
  "syntheticsBrowserCheckCallsCountAggSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current months for all organizations.
   */
  "syntheticsCheckCallsCountAggSum"?: number;
  /**
   * Shows the sum of the high-water marks of used synthetics parallel testing slots over all hours in the current month for all organizations.
   */
  "syntheticsParallelTestingMaxSlotsHwmSum"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current months for all organizations.
   */
  "traceSearchIndexedEventsCountAggSum"?: number;
  /**
   * Shows the sum of all ingested APM span bytes over all hours in the current months for all organizations.
   */
  "twolIngestedEventsBytesAggSum"?: number;
  /**
   * Shows the 99th percentile of all Universal Service Monitoring hosts over all hours in the current months for all organizations.
   */
  "universalServiceMonitoringHostTop99pSum"?: number;
  /**
   * An array of objects regarding hourly usage.
   */
  "usage"?: Array<UsageSummaryDate>;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current months for all organizations.
   */
  "vsphereHostTop99pSum"?: number;
  /**
   * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current months for all organizations.
   */
  "vulnManagementHostCountTop99pSum"?: number;
  /**
   * Sum of all workflows executed over all hours in the current months for all organizations.
   */
  "workflowExecutionsUsageAggSum"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agentHostTop99pSum: {
      baseName: "agent_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99pSum: {
      baseName: "apm_azure_app_service_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    apmFargateCountAvgSum: {
      baseName: "apm_fargate_count_avg_sum",
      type: "number",
      format: "int64",
    },
    apmHostTop99pSum: {
      baseName: "apm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    appsecFargateCountAvgSum: {
      baseName: "appsec_fargate_count_avg_sum",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedAggSum: {
      baseName: "audit_logs_lines_indexed_agg_sum",
      type: "number",
      format: "int64",
    },
    auditTrailEnabledHwmSum: {
      baseName: "audit_trail_enabled_hwm_sum",
      type: "number",
      format: "int64",
    },
    avgProfiledFargateTasksSum: {
      baseName: "avg_profiled_fargate_tasks_sum",
      type: "number",
      format: "int64",
    },
    awsHostTop99pSum: {
      baseName: "aws_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    awsLambdaFuncCount: {
      baseName: "aws_lambda_func_count",
      type: "number",
      format: "int64",
    },
    awsLambdaInvocationsSum: {
      baseName: "aws_lambda_invocations_sum",
      type: "number",
      format: "int64",
    },
    azureAppServiceTop99pSum: {
      baseName: "azure_app_service_top99p_sum",
      type: "number",
      format: "int64",
    },
    azureHostTop99pSum: {
      baseName: "azure_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    billableIngestedBytesAggSum: {
      baseName: "billable_ingested_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    browserRumLiteSessionCountAggSum: {
      baseName: "browser_rum_lite_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    browserRumReplaySessionCountAggSum: {
      baseName: "browser_rum_replay_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    browserRumUnitsAggSum: {
      baseName: "browser_rum_units_agg_sum",
      type: "number",
      format: "int64",
    },
    ciPipelineIndexedSpansAggSum: {
      baseName: "ci_pipeline_indexed_spans_agg_sum",
      type: "number",
      format: "int64",
    },
    ciTestIndexedSpansAggSum: {
      baseName: "ci_test_indexed_spans_agg_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityItrCommittersHwmSum: {
      baseName: "ci_visibility_itr_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityPipelineCommittersHwmSum: {
      baseName: "ci_visibility_pipeline_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityTestCommittersHwmSum: {
      baseName: "ci_visibility_test_committers_hwm_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAwsHostCountAvgSum: {
      baseName: "cloud_cost_management_aws_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAzureHostCountAvgSum: {
      baseName: "cloud_cost_management_azure_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    cloudCostManagementHostCountAvgSum: {
      baseName: "cloud_cost_management_host_count_avg_sum",
      type: "number",
      format: "int64",
    },
    containerAvgSum: {
      baseName: "container_avg_sum",
      type: "number",
      format: "int64",
    },
    containerExclAgentAvgSum: {
      baseName: "container_excl_agent_avg_sum",
      type: "number",
      format: "int64",
    },
    containerHwmSum: {
      baseName: "container_hwm_sum",
      type: "number",
      format: "int64",
    },
    cspmAasHostTop99pSum: {
      baseName: "cspm_aas_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmAwsHostTop99pSum: {
      baseName: "cspm_aws_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmAzureHostTop99pSum: {
      baseName: "cspm_azure_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmContainerAvgSum: {
      baseName: "cspm_container_avg_sum",
      type: "number",
      format: "int64",
    },
    cspmContainerHwmSum: {
      baseName: "cspm_container_hwm_sum",
      type: "number",
      format: "int64",
    },
    cspmGcpHostTop99pSum: {
      baseName: "cspm_gcp_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    cspmHostTop99pSum: {
      baseName: "cspm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    customTsSum: {
      baseName: "custom_ts_sum",
      type: "number",
      format: "int64",
    },
    cwsContainersAvgSum: {
      baseName: "cws_containers_avg_sum",
      type: "number",
      format: "int64",
    },
    cwsHostTop99pSum: {
      baseName: "cws_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    dbmHostTop99pSum: {
      baseName: "dbm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    dbmQueriesAvgSum: {
      baseName: "dbm_queries_avg_sum",
      type: "number",
      format: "int64",
    },
    endDate: {
      baseName: "end_date",
      type: "Date",
      format: "date-time",
    },
    fargateTasksCountAvgSum: {
      baseName: "fargate_tasks_count_avg_sum",
      type: "number",
      format: "int64",
    },
    fargateTasksCountHwmSum: {
      baseName: "fargate_tasks_count_hwm_sum",
      type: "number",
      format: "int64",
    },
    forwardingEventsBytesAggSum: {
      baseName: "forwarding_events_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    gcpHostTop99pSum: {
      baseName: "gcp_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    herokuHostTop99pSum: {
      baseName: "heroku_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwmSum: {
      baseName: "incident_management_monthly_active_users_hwm_sum",
      type: "number",
      format: "int64",
    },
    indexedEventsCountAggSum: {
      baseName: "indexed_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    infraHostTop99pSum: {
      baseName: "infra_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    ingestedEventsBytesAggSum: {
      baseName: "ingested_events_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceAggSum: {
      baseName: "iot_device_agg_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceTop99pSum: {
      baseName: "iot_device_top99p_sum",
      type: "number",
      format: "int64",
    },
    lastUpdated: {
      baseName: "last_updated",
      type: "Date",
      format: "date-time",
    },
    liveIndexedEventsAggSum: {
      baseName: "live_indexed_events_agg_sum",
      type: "number",
      format: "int64",
    },
    liveIngestedBytesAggSum: {
      baseName: "live_ingested_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    logsByRetention: {
      baseName: "logs_by_retention",
      type: "LogsByRetention",
    },
    mobileRumLiteSessionCountAggSum: {
      baseName: "mobile_rum_lite_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAggSum: {
      baseName: "mobile_rum_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAndroidAggSum: {
      baseName: "mobile_rum_session_count_android_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountFlutterAggSum: {
      baseName: "mobile_rum_session_count_flutter_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountIosAggSum: {
      baseName: "mobile_rum_session_count_ios_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountReactnativeAggSum: {
      baseName: "mobile_rum_session_count_reactnative_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountRokuAggSum: {
      baseName: "mobile_rum_session_count_roku_agg_sum",
      type: "number",
      format: "int64",
    },
    mobileRumUnitsAggSum: {
      baseName: "mobile_rum_units_agg_sum",
      type: "number",
      format: "int64",
    },
    netflowIndexedEventsCountAggSum: {
      baseName: "netflow_indexed_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    npmHostTop99pSum: {
      baseName: "npm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    observabilityPipelinesBytesProcessedAggSum: {
      baseName: "observability_pipelines_bytes_processed_agg_sum",
      type: "number",
      format: "int64",
    },
    onlineArchiveEventsCountAggSum: {
      baseName: "online_archive_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    opentelemetryApmHostTop99pSum: {
      baseName: "opentelemetry_apm_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    opentelemetryHostTop99pSum: {
      baseName: "opentelemetry_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    profilingContainerAgentCountAvg: {
      baseName: "profiling_container_agent_count_avg",
      type: "number",
      format: "int64",
    },
    profilingHostCountTop99pSum: {
      baseName: "profiling_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    rehydratedIndexedEventsAggSum: {
      baseName: "rehydrated_indexed_events_agg_sum",
      type: "number",
      format: "int64",
    },
    rehydratedIngestedBytesAggSum: {
      baseName: "rehydrated_ingested_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserAndMobileSessionCount: {
      baseName: "rum_browser_and_mobile_session_count",
      type: "number",
      format: "int64",
    },
    rumSessionCountAggSum: {
      baseName: "rum_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumTotalSessionCountAggSum: {
      baseName: "rum_total_session_count_agg_sum",
      type: "number",
      format: "int64",
    },
    rumUnitsAggSum: {
      baseName: "rum_units_agg_sum",
      type: "number",
      format: "int64",
    },
    sdsApmScannedBytesSum: {
      baseName: "sds_apm_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsEventsScannedBytesSum: {
      baseName: "sds_events_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsLogsScannedBytesSum: {
      baseName: "sds_logs_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsRumScannedBytesSum: {
      baseName: "sds_rum_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsTotalScannedBytesSum: {
      baseName: "sds_total_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "Date",
      format: "date-time",
    },
    syntheticsBrowserCheckCallsCountAggSum: {
      baseName: "synthetics_browser_check_calls_count_agg_sum",
      type: "number",
      format: "int64",
    },
    syntheticsCheckCallsCountAggSum: {
      baseName: "synthetics_check_calls_count_agg_sum",
      type: "number",
      format: "int64",
    },
    syntheticsParallelTestingMaxSlotsHwmSum: {
      baseName: "synthetics_parallel_testing_max_slots_hwm_sum",
      type: "number",
      format: "int64",
    },
    traceSearchIndexedEventsCountAggSum: {
      baseName: "trace_search_indexed_events_count_agg_sum",
      type: "number",
      format: "int64",
    },
    twolIngestedEventsBytesAggSum: {
      baseName: "twol_ingested_events_bytes_agg_sum",
      type: "number",
      format: "int64",
    },
    universalServiceMonitoringHostTop99pSum: {
      baseName: "universal_service_monitoring_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    usage: {
      baseName: "usage",
      type: "Array<UsageSummaryDate>",
    },
    vsphereHostTop99pSum: {
      baseName: "vsphere_host_top99p_sum",
      type: "number",
      format: "int64",
    },
    vulnManagementHostCountTop99pSum: {
      baseName: "vuln_management_host_count_top99p_sum",
      type: "number",
      format: "int64",
    },
    workflowExecutionsUsageAggSum: {
      baseName: "workflow_executions_usage_agg_sum",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSummaryResponse.attributeTypeMap;
  }

  public constructor() {}
}
