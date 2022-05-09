/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";

import { AttributeTypeMap } from "../util";

/**
 * Response with hourly report of all data billed by Datadog all organizations.
 */
export class UsageSummaryDate {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
   */
  "agentHostTop99P"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
   */
  "apmAzureAppServiceHostTop99P"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
   */
  "apmHostTop99P"?: number;
  /**
   * Shows the sum of audit logs lines indexed over all hours in the current date for all organizations.
   */
  "auditLogsLinesIndexedSum"?: number;
  /**
   * The average profiled task count for Fargate Profiling.
   */
  "avgProfiledFargateTasks"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
   */
  "awsHostTop99P"?: number;
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
  "azureAppServiceTop99P"?: number;
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
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current month for all organizations.
   */
  "ciVisibilityPipelineCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current month for all organizations.
   */
  "ciVisibilityTestCommittersHwm"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current date for all organizations.
   */
  "containerAvg"?: number;
  /**
   * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
   */
  "containerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management Azure app services hosts over all hours in the current date for all organizations.
   */
  "cspmAasHostTop99P"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management Azure hosts over all hours in the current date for all organizations.
   */
  "cspmAzureHostTop99P"?: number;
  /**
   * Shows the average number of Cloud Security Posture Management containers over all hours in the current date for all organizations.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Posture Management containers over all hours in the current date for all organizations.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management hosts over all hours in the current date for all organizations.
   */
  "cspmHostTop99P"?: number;
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
  "cwsHostTop99P"?: number;
  /**
   * The date for the usage.
   */
  "date"?: Date;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current date for all organizations.
   */
  "dbmHostTop99P"?: number;
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
   * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
   */
  "gcpHostTop99P"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
   */
  "herokuHostTop99P"?: number;
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
  "infraHostTop99P"?: number;
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
  "iotDeviceTop99P"?: number;
  /**
   * Shows the sum of all mobile lite sessions over all hours in the current date for all organizations.
   */
  "mobileRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current date for all organizations
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current date for all organizations.
   */
  "mobileRumUnitsSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for all organizations.
   */
  "netflowIndexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for all organizations.
   */
  "npmHostTop99P"?: number;
  /**
   * Sum of all observability pipelines bytes processed over all hours in the current date for the given org.
   */
  "observabilityPipelinesBytesProcessedSum"?: number;
  /**
   * Sum of all online archived events over all hours in the current date for all organizations.
   */
  "onlineArchiveEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
   */
  "opentelemetryHostTop99P"?: number;
  /**
   * Organizations associated with a user.
   */
  "orgs"?: Array<UsageSummaryDateOrg>;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current date for all organizations.
   */
  "profilingHostTop99P"?: number;
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
   * Shows the sum of all bytes scanned of logs usage by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsLogsScannedBytesSum"?: number;
  /**
   * Shows the sum of all bytes scanned across all usage types by the Sensitive Data Scanner over all hours in the current month for all organizations.
   */
  "sdsTotalScannedBytesSum"?: number;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
   */
  "syntheticsCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
   */
  "traceSearchIndexedEventsCountSum"?: number;
  /**
   * Shows the sum of all ingested APM span bytes over all hours in the current date for all organizations.
   */
  "twolIngestedEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.
   */
  "vsphereHostTop99P"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    agentHostTop99P: {
      baseName: "agent_host_top99p",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99P: {
      baseName: "apm_azure_app_service_host_top99p",
      type: "number",
      format: "int64",
    },
    apmHostTop99P: {
      baseName: "apm_host_top99p",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedSum: {
      baseName: "audit_logs_lines_indexed_sum",
      type: "number",
      format: "int64",
    },
    avgProfiledFargateTasks: {
      baseName: "avg_profiled_fargate_tasks",
      type: "number",
      format: "int64",
    },
    awsHostTop99P: {
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
    azureAppServiceTop99P: {
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
    containerAvg: {
      baseName: "container_avg",
      type: "number",
      format: "int64",
    },
    containerHwm: {
      baseName: "container_hwm",
      type: "number",
      format: "int64",
    },
    cspmAasHostTop99P: {
      baseName: "cspm_aas_host_top99p",
      type: "number",
      format: "int64",
    },
    cspmAzureHostTop99P: {
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
    cspmHostTop99P: {
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
    cwsHostTop99P: {
      baseName: "cws_host_top99p",
      type: "number",
      format: "int64",
    },
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    dbmHostTop99P: {
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
    gcpHostTop99P: {
      baseName: "gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    herokuHostTop99P: {
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
    infraHostTop99P: {
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
    iotDeviceTop99P: {
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
    mobileRumSessionCountIosSum: {
      baseName: "mobile_rum_session_count_ios_sum",
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
    netflowIndexedEventsCountSum: {
      baseName: "netflow_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    npmHostTop99P: {
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
    opentelemetryHostTop99P: {
      baseName: "opentelemetry_host_top99p",
      type: "number",
      format: "int64",
    },
    orgs: {
      baseName: "orgs",
      type: "Array<UsageSummaryDateOrg>",
    },
    profilingHostTop99P: {
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
    sdsLogsScannedBytesSum: {
      baseName: "sds_logs_scanned_bytes_sum",
      type: "number",
      format: "int64",
    },
    sdsTotalScannedBytesSum: {
      baseName: "sds_total_scanned_bytes_sum",
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
    vsphereHostTop99P: {
      baseName: "vsphere_host_top99p",
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
