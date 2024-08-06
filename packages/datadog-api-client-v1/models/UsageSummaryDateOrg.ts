/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Global hourly report of all data billed by Datadog for a given organization.
 */
export class UsageSummaryDateOrg {
  /**
   * The account name.
   */
  "accountName"?: string;
  /**
   * The account public id.
   */
  "accountPublicId"?: string;
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current date for the given org.
   */
  "agentHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date for the given org.
   */
  "apmAzureAppServiceHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all APM DevSecOps hosts over all hours in the current date for the given org.
   */
  "apmDevsecopsHostTop99p"?: number;
  /**
   * Shows the average of all APM ECS Fargate tasks over all hours in the current month for the given org.
   */
  "apmFargateCountAvg"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for the given org.
   */
  "apmHostTop99p"?: number;
  /**
   * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current month for the given org.
   */
  "appsecFargateCountAvg"?: number;
  /**
   * Shows the sum of all Application Security Monitoring Serverless invocations over all hours in the current month for the given org.
   */
  "asmServerlessSum"?: number;
  /**
   * Shows the sum of all audit logs lines indexed over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "auditLogsLinesIndexedSum"?: number;
  /**
   * Shows whether Audit Trail is enabled for the current date for the given org.
   */
  "auditTrailEnabledHwm"?: number;
  /**
   * The average profiled task count for Fargate Profiling.
   */
  "avgProfiledFargateTasks"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current date for the given org.
   */
  "awsHostTop99p"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for the given org.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current date for the given org.
   */
  "azureAppServiceTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
   */
  "billableIngestedBytesSum"?: number;
  /**
   * Shows the sum of all browser lite sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "browserRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all browser replay sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "browserRumReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM units over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "browserRumUnitsSum"?: number;
  /**
   * Shows the sum of all CI pipeline indexed spans over all hours in the current date for the given org.
   */
  "ciPipelineIndexedSpansSum"?: number;
  /**
   * Shows the sum of all CI test indexed spans over all hours in the current date for the given org.
   */
  "ciTestIndexedSpansSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current date for the given org.
   */
  "ciVisibilityItrCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current date for the given org.
   */
  "ciVisibilityPipelineCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current date for the given org.
   */
  "ciVisibilityTestCommittersHwm"?: number;
  /**
   * Host count average of Cloud Cost Management for AWS for the given date and given org.
   */
  "cloudCostManagementAwsHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for Azure for the given date and given org.
   */
  "cloudCostManagementAzureHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for GCP for the given date and given org.
   */
  "cloudCostManagementGcpHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for all cloud providers for the given date and given org.
   */
  "cloudCostManagementHostCountAvg"?: number;
  /**
   * Shows the sum of all Cloud Security Information and Event Management events over all hours in the current date for the given org.
   */
  "cloudSiemEventsSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current date for the given org.
   */
  "containerAvg"?: number;
  /**
   * Shows the average of containers without the Datadog Agent over all hours in the current date for the given organization.
   */
  "containerExclAgentAvg"?: number;
  /**
   * Shows the high-water mark of all distinct containers over all hours in the current date for the given org.
   */
  "containerHwm"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise compliance containers over all hours in the current date for the given org.
   */
  "csmContainerEnterpriseComplianceCountSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise Cloud Workload Security containers over all hours in the current date for the given org.
   */
  "csmContainerEnterpriseCwsCountSum"?: number;
  /**
   * Shows the sum of all Cloud Security Management Enterprise containers over all hours in the current date for the given org.
   */
  "csmContainerEnterpriseTotalCountSum"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Azure app services hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseAasHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise AWS hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseAwsHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Azure hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseAzureHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise compliance hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseComplianceHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise Cloud Workload Security hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseCwsHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise GCP hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseGcpHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Enterprise hosts over all hours in the current date for the given org.
   */
  "csmHostEnterpriseTotalHostCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current date for the given org.
   */
  "cspmAasHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current date for the given org.
   */
  "cspmAwsHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current date for the given org.
   */
  "cspmAzureHostTop99p"?: number;
  /**
   * Shows the average number of Cloud Security Management Pro containers over all hours in the current date for the given org.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Management Pro containers over all hours in the current date for the given org.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current date for the given org.
   */
  "cspmGcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current date for the given org.
   */
  "cspmHostTop99p"?: number;
  /**
   * Shows the average number of distinct historical custom metrics over all hours in the current date for the given org.
   */
  "customHistoricalTsAvg"?: number;
  /**
   * Shows the average number of distinct live custom metrics over all hours in the current date for the given org.
   */
  "customLiveTsAvg"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current date for the given org.
   */
  "customTsAvg"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for the given org.
   */
  "cwsContainerCountAvg"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for the given org.
   */
  "cwsHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current month for the given org.
   */
  "dbmHostTop99pSum"?: number;
  /**
   * Shows the average of all distinct Database Monitoring normalized queries over all hours in the current month for the given org.
   */
  "dbmQueriesAvgSum"?: number;
  /**
   * Shows the sum of all Error Tracking events over all hours in the current date for the given org.
   */
  "errorTrackingEventsSum"?: number;
  /**
   * The average task count for Fargate.
   */
  "fargateTasksCountAvg"?: number;
  /**
   * Shows the high-water mark of all Fargate tasks over all hours in the current date for the given org.
   */
  "fargateTasksCountHwm"?: number;
  /**
   * Shows the average number of Flex Logs Compute Large Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeLargeAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Medium Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeMediumAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Small Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeSmallAvg"?: number;
  /**
   * Shows the average number of Flex Logs Compute Extra Small Instances over all hours in the current date for the given org.
   */
  "flexLogsComputeXsmallAvg"?: number;
  /**
   * Shows the average number of Flex Logs Starter Instances over all hours in the current date for the given org.
   */
  "flexLogsStarterAvg"?: number;
  /**
   * Shows the average number of Flex Logs Starter Storage Index Instances over all hours in the current date for the given org.
   */
  "flexLogsStarterStorageIndexAvg"?: number;
  /**
   * Shows the average number of Flex Logs Starter Storage Retention Adjustment Instances over all hours in the current date for the given org.
   */
  "flexLogsStarterStorageRetentionAdjustmentAvg"?: number;
  /**
   * Shows the average of all Flex Stored Logs over all hours in the current date for the given org.
   */
  "flexStoredLogsAvg"?: number;
  /**
   * Shows the sum of all log bytes forwarded over all hours in the current date for the given org.
   */
  "forwardingEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current date for the given org.
   */
  "gcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current date for the given org.
   */
  "herokuHostTop99p"?: number;
  /**
   * The organization id.
   */
  "id"?: string;
  /**
   * Shows the high-water mark of incident management monthly active users over all hours in the current date for the given org.
   */
  "incidentManagementMonthlyActiveUsersHwm"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "indexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for the given org.
   */
  "infraHostTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for the given org.
   */
  "ingestedEventsBytesSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current date for the given org.
   */
  "iotDeviceAggSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current date for the given org.
   */
  "iotDeviceTop99pSum"?: number;
  /**
   * Shows the sum of all mobile lite sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Android over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Flutter over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on iOS over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on React Native over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions on Roku over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountRokuSum"?: number;
  /**
   * Shows the sum of all mobile RUM sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "mobileRumUnitsSum"?: number;
  /**
   * The organization name.
   */
  "name"?: string;
  /**
   * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current date for the given org.
   */
  "ndmNetflowEventsSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "netflowIndexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for the given org.
   */
  "npmHostTop99p"?: number;
  /**
   * Sum of all observability pipelines bytes processed over all hours in the current date for the given org.
   */
  "observabilityPipelinesBytesProcessedSum"?: number;
  /**
   * Sum of all online archived events over all hours in the current date for the given org.
   */
  "onlineArchiveEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
   */
  "opentelemetryApmHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for the given org.
   */
  "opentelemetryHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all profiled Azure app services over all hours in the current date for all organizations.
   */
  "profilingAasCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current date for the given org.
   */
  "profilingHostTop99p"?: number;
  /**
   * The organization public id.
   */
  "publicId"?: string;
  /**
   * The region of the organization.
   */
  "region"?: string;
  /**
   * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "rumBrowserAndMobileSessionCount"?: number;
  /**
   * Shows the sum of all browser RUM legacy sessions over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumBrowserLegacySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM lite sessions over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumBrowserLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM Session Replay counts over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumBrowserReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all RUM lite sessions (browser and mobile) over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Android over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Flutter over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on iOS over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on React Native over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM legacy sessions on Roku over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLegacySessionCountRokuSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Android over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Flutter over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on iOS over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on React Native over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM lite sessions on Roku over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumMobileLiteSessionCountRokuSum"?: number;
  /**
   * Shows the sum of all RUM Session Replay counts over all hours in the current date for the given org (To be introduced on October 1st, 2024).
   */
  "rumReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM lite sessions over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "rumSessionCountSum"?: number;
  /**
   * Shows the sum of RUM sessions (browser and mobile) over all hours in the current date for the given org.
   */
  "rumTotalSessionCountSum"?: number;
  /**
   * Shows the sum of all browser and mobile RUM units over all hours in the current date for the given org (To be deprecated on October 1st, 2024).
   */
  "rumUnitsSum"?: number;
  /**
   * Shows the average of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.
   */
  "scaFargateCountAvg"?: number;
  /**
   * Shows the sum of the high-water marks of all Software Composition Analysis Fargate tasks over all hours in the current date for the given org.
   */
  "scaFargateCountHwm"?: number;
  /**
   * Sum of all APM bytes scanned with sensitive data scanner over all hours in the current date for the given org.
   */
  "sdsApmScannedBytesSum"?: number;
  /**
   * Sum of all event stream events bytes scanned with sensitive data scanner over all hours in the current date for the given org.
   */
  "sdsEventsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for the given org.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Sum of all RUM bytes scanned with sensitive data scanner over all hours in the current date for the given org.
   */
  "sdsRumScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for the given org.
   */
  "sdsTotalScannedBytesSum"?: number;
  /**
   * Shows the average of the number of Serverless Apps for Azure for the given date and given org.
   */
  "serverlessAppsAzureCountAvg"?: number;
  /**
   * Shows the average of the number of Serverless Apps for Google Cloud for the given date and given org.
   */
  "serverlessAppsGoogleCountAvg"?: number;
  /**
   * Shows the average of the number of Serverless Apps for Azure and Google Cloud for the given date and given org.
   */
  "serverlessAppsTotalCountAvg"?: number;
  /**
   * Shows the sum of all log events analyzed by Cloud SIEM over all hours in the current date for the given org.
   */
  "siemAnalyzedLogsAddOnCountSum"?: number;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current date for the given org.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for the given org.
   */
  "syntheticsCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic mobile application tests over all hours in the current date for the given org.
   */
  "syntheticsMobileTestRunsSum"?: number;
  /**
   * Shows the high-water mark of used synthetics parallel testing slots over all hours in the current date for the given org.
   */
  "syntheticsParallelTestingMaxSlotsHwm"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current date for the given org.
   */
  "traceSearchIndexedEventsCountSum"?: number;
  /**
   * Shows the sum of all ingested APM span bytes over all hours in the current date for the given org.
   */
  "twolIngestedEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all Universal Service Monitoring hosts over all hours in the current date for the given org.
   */
  "universalServiceMonitoringHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current date for the given org.
   */
  "vsphereHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current date for the given org.
   */
  "vulnManagementHostCountTop99p"?: number;
  /**
   * Sum of all workflows executed over all hours in the current date for the given org.
   */
  "workflowExecutionsUsageSum"?: number;

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
    accountName: {
      baseName: "account_name",
      type: "string",
    },
    accountPublicId: {
      baseName: "account_public_id",
      type: "string",
    },
    agentHostTop99p: {
      baseName: "agent_host_top99p",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99p: {
      baseName: "apm_azure_app_service_host_top99p",
      type: "number",
      format: "int64",
    },
    apmDevsecopsHostTop99p: {
      baseName: "apm_devsecops_host_top99p",
      type: "number",
      format: "int64",
    },
    apmFargateCountAvg: {
      baseName: "apm_fargate_count_avg",
      type: "number",
      format: "int64",
    },
    apmHostTop99p: {
      baseName: "apm_host_top99p",
      type: "number",
      format: "int64",
    },
    appsecFargateCountAvg: {
      baseName: "appsec_fargate_count_avg",
      type: "number",
      format: "int64",
    },
    asmServerlessSum: {
      baseName: "asm_serverless_sum",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedSum: {
      baseName: "audit_logs_lines_indexed_sum",
      type: "number",
      format: "int64",
    },
    auditTrailEnabledHwm: {
      baseName: "audit_trail_enabled_hwm",
      type: "number",
      format: "int64",
    },
    avgProfiledFargateTasks: {
      baseName: "avg_profiled_fargate_tasks",
      type: "number",
      format: "int64",
    },
    awsHostTop99p: {
      baseName: "aws_host_top99p",
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
    azureAppServiceTop99p: {
      baseName: "azure_app_service_top99p",
      type: "number",
      format: "int64",
    },
    billableIngestedBytesSum: {
      baseName: "billable_ingested_bytes_sum",
      type: "number",
      format: "int64",
    },
    browserRumLiteSessionCountSum: {
      baseName: "browser_rum_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    browserRumReplaySessionCountSum: {
      baseName: "browser_rum_replay_session_count_sum",
      type: "number",
      format: "int64",
    },
    browserRumUnitsSum: {
      baseName: "browser_rum_units_sum",
      type: "number",
      format: "int64",
    },
    ciPipelineIndexedSpansSum: {
      baseName: "ci_pipeline_indexed_spans_sum",
      type: "number",
      format: "int64",
    },
    ciTestIndexedSpansSum: {
      baseName: "ci_test_indexed_spans_sum",
      type: "number",
      format: "int64",
    },
    ciVisibilityItrCommittersHwm: {
      baseName: "ci_visibility_itr_committers_hwm",
      type: "number",
      format: "int64",
    },
    ciVisibilityPipelineCommittersHwm: {
      baseName: "ci_visibility_pipeline_committers_hwm",
      type: "number",
      format: "int64",
    },
    ciVisibilityTestCommittersHwm: {
      baseName: "ci_visibility_test_committers_hwm",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAwsHostCountAvg: {
      baseName: "cloud_cost_management_aws_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementAzureHostCountAvg: {
      baseName: "cloud_cost_management_azure_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementGcpHostCountAvg: {
      baseName: "cloud_cost_management_gcp_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudCostManagementHostCountAvg: {
      baseName: "cloud_cost_management_host_count_avg",
      type: "number",
      format: "int64",
    },
    cloudSiemEventsSum: {
      baseName: "cloud_siem_events_sum",
      type: "number",
      format: "int64",
    },
    containerAvg: {
      baseName: "container_avg",
      type: "number",
      format: "int64",
    },
    containerExclAgentAvg: {
      baseName: "container_excl_agent_avg",
      type: "number",
      format: "int64",
    },
    containerHwm: {
      baseName: "container_hwm",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseComplianceCountSum: {
      baseName: "csm_container_enterprise_compliance_count_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseCwsCountSum: {
      baseName: "csm_container_enterprise_cws_count_sum",
      type: "number",
      format: "int64",
    },
    csmContainerEnterpriseTotalCountSum: {
      baseName: "csm_container_enterprise_total_count_sum",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAasHostCountTop99p: {
      baseName: "csm_host_enterprise_aas_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAwsHostCountTop99p: {
      baseName: "csm_host_enterprise_aws_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseAzureHostCountTop99p: {
      baseName: "csm_host_enterprise_azure_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseComplianceHostCountTop99p: {
      baseName: "csm_host_enterprise_compliance_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseCwsHostCountTop99p: {
      baseName: "csm_host_enterprise_cws_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseGcpHostCountTop99p: {
      baseName: "csm_host_enterprise_gcp_host_count_top99p",
      type: "number",
      format: "int64",
    },
    csmHostEnterpriseTotalHostCountTop99p: {
      baseName: "csm_host_enterprise_total_host_count_top99p",
      type: "number",
      format: "int64",
    },
    cspmAasHostTop99p: {
      baseName: "cspm_aas_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmAwsHostTop99p: {
      baseName: "cspm_aws_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmAzureHostTop99p: {
      baseName: "cspm_azure_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmContainerAvg: {
      baseName: "cspm_container_avg",
      type: "number",
      format: "int64",
    },
    cspmContainerHwm: {
      baseName: "cspm_container_hwm",
      type: "number",
      format: "int64",
    },
    cspmGcpHostTop99p: {
      baseName: "cspm_gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmHostTop99p: {
      baseName: "cspm_host_top99p",
      type: "number",
      format: "int64",
    },
    customHistoricalTsAvg: {
      baseName: "custom_historical_ts_avg",
      type: "number",
      format: "int64",
    },
    customLiveTsAvg: {
      baseName: "custom_live_ts_avg",
      type: "number",
      format: "int64",
    },
    customTsAvg: {
      baseName: "custom_ts_avg",
      type: "number",
      format: "int64",
    },
    cwsContainerCountAvg: {
      baseName: "cws_container_count_avg",
      type: "number",
      format: "int64",
    },
    cwsHostTop99p: {
      baseName: "cws_host_top99p",
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
    errorTrackingEventsSum: {
      baseName: "error_tracking_events_sum",
      type: "number",
      format: "int64",
    },
    fargateTasksCountAvg: {
      baseName: "fargate_tasks_count_avg",
      type: "number",
      format: "int64",
    },
    fargateTasksCountHwm: {
      baseName: "fargate_tasks_count_hwm",
      type: "number",
      format: "int64",
    },
    flexLogsComputeLargeAvg: {
      baseName: "flex_logs_compute_large_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeMediumAvg: {
      baseName: "flex_logs_compute_medium_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeSmallAvg: {
      baseName: "flex_logs_compute_small_avg",
      type: "number",
      format: "int64",
    },
    flexLogsComputeXsmallAvg: {
      baseName: "flex_logs_compute_xsmall_avg",
      type: "number",
      format: "int64",
    },
    flexLogsStarterAvg: {
      baseName: "flex_logs_starter_avg",
      type: "number",
      format: "int64",
    },
    flexLogsStarterStorageIndexAvg: {
      baseName: "flex_logs_starter_storage_index_avg",
      type: "number",
      format: "int64",
    },
    flexLogsStarterStorageRetentionAdjustmentAvg: {
      baseName: "flex_logs_starter_storage_retention_adjustment_avg",
      type: "number",
      format: "int64",
    },
    flexStoredLogsAvg: {
      baseName: "flex_stored_logs_avg",
      type: "number",
      format: "int64",
    },
    forwardingEventsBytesSum: {
      baseName: "forwarding_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    gcpHostTop99p: {
      baseName: "gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    herokuHostTop99p: {
      baseName: "heroku_host_top99p",
      type: "number",
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    incidentManagementMonthlyActiveUsersHwm: {
      baseName: "incident_management_monthly_active_users_hwm",
      type: "number",
      format: "int64",
    },
    indexedEventsCountSum: {
      baseName: "indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    infraHostTop99p: {
      baseName: "infra_host_top99p",
      type: "number",
      format: "int64",
    },
    ingestedEventsBytesSum: {
      baseName: "ingested_events_bytes_sum",
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
    mobileRumLiteSessionCountSum: {
      baseName: "mobile_rum_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAndroidSum: {
      baseName: "mobile_rum_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountFlutterSum: {
      baseName: "mobile_rum_session_count_flutter_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountIosSum: {
      baseName: "mobile_rum_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountReactnativeSum: {
      baseName: "mobile_rum_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountRokuSum: {
      baseName: "mobile_rum_session_count_roku_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountSum: {
      baseName: "mobile_rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    mobileRumUnitsSum: {
      baseName: "mobile_rum_units_sum",
      type: "number",
      format: "int64",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    ndmNetflowEventsSum: {
      baseName: "ndm_netflow_events_sum",
      type: "number",
      format: "int64",
    },
    netflowIndexedEventsCountSum: {
      baseName: "netflow_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    npmHostTop99p: {
      baseName: "npm_host_top99p",
      type: "number",
      format: "int64",
    },
    observabilityPipelinesBytesProcessedSum: {
      baseName: "observability_pipelines_bytes_processed_sum",
      type: "number",
      format: "int64",
    },
    onlineArchiveEventsCountSum: {
      baseName: "online_archive_events_count_sum",
      type: "number",
      format: "int64",
    },
    opentelemetryApmHostTop99p: {
      baseName: "opentelemetry_apm_host_top99p",
      type: "number",
      format: "int64",
    },
    opentelemetryHostTop99p: {
      baseName: "opentelemetry_host_top99p",
      type: "number",
      format: "int64",
    },
    profilingAasCountTop99p: {
      baseName: "profiling_aas_count_top99p",
      type: "number",
      format: "int64",
    },
    profilingHostTop99p: {
      baseName: "profiling_host_top99p",
      type: "number",
      format: "int64",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
    region: {
      baseName: "region",
      type: "string",
    },
    rumBrowserAndMobileSessionCount: {
      baseName: "rum_browser_and_mobile_session_count",
      type: "number",
      format: "int64",
    },
    rumBrowserLegacySessionCountSum: {
      baseName: "rum_browser_legacy_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserLiteSessionCountSum: {
      baseName: "rum_browser_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumBrowserReplaySessionCountSum: {
      baseName: "rum_browser_replay_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumLiteSessionCountSum: {
      baseName: "rum_lite_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountAndroidSum: {
      baseName: "rum_mobile_legacy_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountFlutterSum: {
      baseName: "rum_mobile_legacy_session_count_flutter_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountIosSum: {
      baseName: "rum_mobile_legacy_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountReactnativeSum: {
      baseName: "rum_mobile_legacy_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLegacySessionCountRokuSum: {
      baseName: "rum_mobile_legacy_session_count_roku_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountAndroidSum: {
      baseName: "rum_mobile_lite_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountFlutterSum: {
      baseName: "rum_mobile_lite_session_count_flutter_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountIosSum: {
      baseName: "rum_mobile_lite_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountReactnativeSum: {
      baseName: "rum_mobile_lite_session_count_reactnative_sum",
      type: "number",
      format: "int64",
    },
    rumMobileLiteSessionCountRokuSum: {
      baseName: "rum_mobile_lite_session_count_roku_sum",
      type: "number",
      format: "int64",
    },
    rumReplaySessionCountSum: {
      baseName: "rum_replay_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumSessionCountSum: {
      baseName: "rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumTotalSessionCountSum: {
      baseName: "rum_total_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumUnitsSum: {
      baseName: "rum_units_sum",
      type: "number",
      format: "int64",
    },
    scaFargateCountAvg: {
      baseName: "sca_fargate_count_avg",
      type: "number",
      format: "int64",
    },
    scaFargateCountHwm: {
      baseName: "sca_fargate_count_hwm",
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
    serverlessAppsAzureCountAvg: {
      baseName: "serverless_apps_azure_count_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsGoogleCountAvg: {
      baseName: "serverless_apps_google_count_avg",
      type: "number",
      format: "int64",
    },
    serverlessAppsTotalCountAvg: {
      baseName: "serverless_apps_total_count_avg",
      type: "number",
      format: "int64",
    },
    siemAnalyzedLogsAddOnCountSum: {
      baseName: "siem_analyzed_logs_add_on_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsBrowserCheckCallsCountSum: {
      baseName: "synthetics_browser_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsCheckCallsCountSum: {
      baseName: "synthetics_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsMobileTestRunsSum: {
      baseName: "synthetics_mobile_test_runs_sum",
      type: "number",
      format: "int64",
    },
    syntheticsParallelTestingMaxSlotsHwm: {
      baseName: "synthetics_parallel_testing_max_slots_hwm",
      type: "number",
      format: "int64",
    },
    traceSearchIndexedEventsCountSum: {
      baseName: "trace_search_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    twolIngestedEventsBytesSum: {
      baseName: "twol_ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    universalServiceMonitoringHostTop99p: {
      baseName: "universal_service_monitoring_host_top99p",
      type: "number",
      format: "int64",
    },
    vsphereHostTop99p: {
      baseName: "vsphere_host_top99p",
      type: "number",
      format: "int64",
    },
    vulnManagementHostCountTop99p: {
      baseName: "vuln_management_host_count_top99p",
      type: "number",
      format: "int64",
    },
    workflowExecutionsUsageSum: {
      baseName: "workflow_executions_usage_sum",
      type: "number",
      format: "int64",
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
    return UsageSummaryDateOrg.attributeTypeMap;
  }

  public constructor() {}
}
