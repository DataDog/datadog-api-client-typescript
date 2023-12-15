/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response with hourly report of all data billed by Datadog all organizations.
 */
export class UsageSummaryDate {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
   */
  "agentHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
   */
  "apmAzureAppServiceHostTop99p"?: number;
  /**
   * Shows the average of all APM ECS Fargate tasks over all hours in the current date for all organizations.
   */
  "apmFargateCountAvg"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
   */
  "apmHostTop99p"?: number;
  /**
   * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current date for all organizations.
   */
  "appsecFargateCountAvg"?: number;
  /**
   * Shows the sum of audit logs lines indexed over all hours in the current date for all organizations.
   */
  "auditLogsLinesIndexedSum"?: number;
  /**
   * Shows the number of organizations that had Audit Trail enabled in the current date.
   */
  "auditTrailEnabledHwm"?: number;
  /**
   * The average profiled task count for Fargate Profiling.
   */
  "avgProfiledFargateTasks"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
   */
  "awsHostTop99p"?: number;
  /**
   * Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.
   */
  "azureAppServiceTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
   */
  "billableIngestedBytesSum"?: number;
  /**
   * Shows the sum of all browser lite sessions over all hours in the current date for all organizations.
   */
  "browserRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all browser replay sessions over all hours in the current date for all organizations.
   */
  "browserRumReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM units over all hours in the current date for all organizations.
   */
  "browserRumUnitsSum"?: number;
  /**
   * Shows the sum of all CI pipeline indexed spans over all hours in the current month for all organizations.
   */
  "ciPipelineIndexedSpansSum"?: number;
  /**
   * Shows the sum of all CI test indexed spans over all hours in the current month for all organizations.
   */
  "ciTestIndexedSpansSum"?: number;
  /**
   * Shows the high-water mark of all CI visibility intelligent test runner committers over all hours in the current month for all organizations.
   */
  "ciVisibilityItrCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.
   */
  "ciVisibilityPipelineCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.
   */
  "ciVisibilityTestCommittersHwm"?: number;
  /**
   * Host count average of Cloud Cost Management for AWS for the given date and given organization.
   */
  "cloudCostManagementAwsHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for Azure for the given date and given organization.
   */
  "cloudCostManagementAzureHostCountAvg"?: number;
  /**
   * Host count average of Cloud Cost Management for all cloud providers for the given date and given organization.
   */
  "cloudCostManagementHostCountAvg"?: number;
  /**
   * Shows the sum of all Cloud Security Information and Event Management events over all hours in the current date for the given org.
   */
  "cloudSiemEventsSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current date for all organizations.
   */
  "containerAvg"?: number;
  /**
   * Shows the average of containers without the Datadog Agent over all hours in the current date for all organizations.
   */
  "containerExclAgentAvg"?: number;
  /**
   * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
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
   * Shows the 99th percentile of all Cloud Security Management Pro Azure app services hosts over all hours in the current date for all organizations.
   */
  "cspmAasHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro AWS hosts over all hours in the current date for all organizations.
   */
  "cspmAwsHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro Azure hosts over all hours in the current date for all organizations.
   */
  "cspmAzureHostTop99p"?: number;
  /**
   * Shows the average number of Cloud Security Management Pro containers over all hours in the current date for all organizations.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Management Pro containers over all hours in the current date for all organizations.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro GCP hosts over all hours in the current date for all organizations.
   */
  "cspmGcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Management Pro hosts over all hours in the current date for all organizations.
   */
  "cspmHostTop99p"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current date for all organizations.
   */
  "customTsAvg"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for all organizations.
   */
  "cwsContainerCountAvg"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for all organizations.
   */
  "cwsHostTop99p"?: number;
  /**
   * The date for the usage.
   */
  "date"?: Date;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current date for all organizations.
   */
  "dbmHostTop99p"?: number;
  /**
   * Shows the average of all normalized Database Monitoring queries over all hours in the current date for all organizations.
   */
  "dbmQueriesCountAvg"?: number;
  /**
   * Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateTasksCountAvg"?: number;
  /**
   * Shows the average of all Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateTasksCountHwm"?: number;
  /**
   * Shows the sum of all log bytes forwarded over all hours in the current date for all organizations.
   */
  "forwardingEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
   */
  "gcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
   */
  "herokuHostTop99p"?: number;
  /**
   * Shows the high-water mark of incident management monthly active users over all hours in the current date for all organizations.
   */
  "incidentManagementMonthlyActiveUsersHwm"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current date for all organizations.
   */
  "indexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.
   */
  "infraHostTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
   */
  "ingestedEventsBytesSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current date for all organizations.
   */
  "iotDeviceSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.
   */
  "iotDeviceTop99p"?: number;
  /**
   * Shows the sum of all mobile lite sessions over all hours in the current date for all organizations.
   */
  "mobileRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Flutter over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on React Native over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Roku over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountRokuSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current date for all organizations
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current date for all organizations.
   */
  "mobileRumUnitsSum"?: number;
  /**
   * Shows the sum of all Network Device Monitoring NetFlow events over all hours in the current date for the given org.
   */
  "ndmNetflowEventsSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for all organizations.
   */
  "netflowIndexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for all organizations.
   */
  "npmHostTop99p"?: number;
  /**
   * Sum of all observability pipelines bytes processed over all hours in the current date for the given org.
   */
  "observabilityPipelinesBytesProcessedSum"?: number;
  /**
   * Sum of all online archived events over all hours in the current date for all organizations.
   */
  "onlineArchiveEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of APM hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
   */
  "opentelemetryApmHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
   */
  "opentelemetryHostTop99p"?: number;
  /**
   * Organizations associated with a user.
   */
  "orgs"?: Array<UsageSummaryDateOrg>;
  /**
   * Shows the 99th percentile of all profiled Azure app services over all hours in the current date for all organizations.
   */
  "profilingAasCountTop99p"?: number;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current date for all organizations.
   */
  "profilingHostTop99p"?: number;
  /**
   * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current month for all organizations.
   */
  "rumBrowserAndMobileSessionCount"?: number;
  /**
   * Shows the sum of all browser RUM Lite Sessions over all hours in the current date for all organizations
   */
  "rumSessionCountSum"?: number;
  /**
   * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for all organizations.
   */
  "rumTotalSessionCountSum"?: number;
  /**
   * Shows the sum of all browser and mobile RUM units over all hours in the current date for all organizations.
   */
  "rumUnitsSum"?: number;
  /**
   * Sum of all APM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
   */
  "sdsApmScannedBytesSum"?: number;
  /**
   * Sum of all event stream events bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
   */
  "sdsEventsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Sum of all RUM bytes scanned with sensitive data scanner over all hours in the current date for all organizations.
   */
  "sdsRumScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
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
   * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
   */
  "syntheticsCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic mobile application tests over all hours in the current date for all organizations.
   */
  "syntheticsMobileTestRunsSum"?: number;
  /**
   * Shows the high-water mark of used synthetics parallel testing slots over all hours in the current date for all organizations.
   */
  "syntheticsParallelTestingMaxSlotsHwm"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
   */
  "traceSearchIndexedEventsCountSum"?: number;
  /**
   * Shows the sum of all ingested APM span bytes over all hours in the current date for all organizations.
   */
  "twolIngestedEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all universal service management hosts over all hours in the current date for the given org.
   */
  "universalServiceMonitoringHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.
   */
  "vsphereHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Application Vulnerability Management hosts over all hours in the current date for the given org.
   */
  "vulnManagementHostCountTop99p"?: number;
  /**
   * Sum of all workflows executed over all hours in the current date for all organizations.
   */
  "workflowExecutionsUsageSum"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    dbmHostTop99p: {
      baseName: "dbm_host_top99p",
      type: "number",
      format: "int64",
    },
    dbmQueriesCountAvg: {
      baseName: "dbm_queries_count_avg",
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
    iotDeviceSum: {
      baseName: "iot_device_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceTop99p: {
      baseName: "iot_device_top99p",
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
    orgs: {
      baseName: "orgs",
      type: "Array<UsageSummaryDateOrg>",
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
    rumBrowserAndMobileSessionCount: {
      baseName: "rum_browser_and_mobile_session_count",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSummaryDate.attributeTypeMap;
  }

  public constructor() {}
}
