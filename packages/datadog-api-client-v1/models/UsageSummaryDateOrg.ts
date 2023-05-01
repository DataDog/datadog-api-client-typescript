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
   * Shows the 99th percentile of all agent hosts over all hours in the current date for the given org.
   */
  "agentHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date for the given org.
   */
  "apmAzureAppServiceHostTop99p"?: number;
  /**
   * Shows the average of all APM ECS Fargate tasks over all hours in the current months for the given org.
   */
  "apmFargateCountAvg"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for the given org.
   */
  "apmHostTop99p"?: number;
  /**
   * Shows the average of all Application Security Monitoring ECS Fargate tasks over all hours in the current months for the given org.
   */
  "appsecFargateCountAvg"?: number;
  /**
   * Shows the sum of all audit logs lines indexed over all hours in the current date for the given org.
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
   * Shows the sum of all browser lite sessions over all hours in the current date for the given org.
   */
  "browserRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all browser replay sessions over all hours in the current date for the given org.
   */
  "browserRumReplaySessionCountSum"?: number;
  /**
   * Shows the sum of all browser RUM units over all hours in the current date for the given org.
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
   * Shows the high-water mark of all CI visibility pipeline committers over all hours in the current date for the given org.
   */
  "ciVisibilityPipelineCommittersHwm"?: number;
  /**
   * Shows the high-water mark of all CI visibility test committers over all hours in the current date for the given org.
   */
  "ciVisibilityTestCommittersHwm"?: number;
  /**
   * Host count average of Cloud Cost Management for the given date and given org.
   */
  "cloudCostManagementHostCountAvg"?: number;
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
   * Shows the 99th percentile of all Cloud Security Posture Management Azure app services hosts over all hours in the current date for the given org.
   */
  "cspmAasHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management AWS hosts over all hours in the current date for the given org.
   */
  "cspmAwsHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management Azure hosts over all hours in the current date for the given org.
   */
  "cspmAzureHostTop99p"?: number;
  /**
   * Shows the average number of Cloud Security Posture Management containers over all hours in the current date for the given org.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Posture Management containers over all hours in the current date for the given org.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management GCP hosts over all hours in the current date for the given org.
   */
  "cspmGcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management hosts over all hours in the current date for the given org.
   */
  "cspmHostTop99p"?: number;
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
   * The average task count for Fargate.
   */
  "fargateTasksCountAvg"?: number;
  /**
   * Shows the high-water mark of all Fargate tasks over all hours in the current date for the given org.
   */
  "fargateTasksCountHwm"?: number;
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
   * Shows the sum of all log events indexed over all hours in the current date for the given org.
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
   * Shows the sum of all mobile lite sessions over all hours in the current date for the given org.
   */
  "mobileRumLiteSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for the given org.
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Flutter over all hours in the current date for the given org.
   */
  "mobileRumSessionCountFlutterSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for the given org.
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on React Native over all hours in the current date for the given org.
   */
  "mobileRumSessionCountReactnativeSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current date for the given org.
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * Shows the sum of all mobile RUM units over all hours in the current date for the given org.
   */
  "mobileRumUnitsSum"?: number;
  /**
   * The organization name.
   */
  "name"?: string;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for the given org.
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
   * Shows the sum of all mobile sessions and all browser lite and legacy sessions over all hours in the current date for the given org.
   */
  "rumBrowserAndMobileSessionCount"?: number;
  /**
   * Shows the sum of all browser RUM Lite Sessions over all hours in the current date for the given org.
   */
  "rumSessionCountSum"?: number;
  /**
   * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for the given org.
   */
  "rumTotalSessionCountSum"?: number;
  /**
   * Shows the sum of all browser and mobile RUM units over all hours in the current date for the given org.
   */
  "rumUnitsSum"?: number;
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
   * Shows the sum of all Synthetic browser tests over all hours in the current date for the given org.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for the given org.
   */
  "syntheticsCheckCallsCountSum"?: number;
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
    cloudCostManagementHostCountAvg: {
      baseName: "cloud_cost_management_host_count_avg",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSummaryDateOrg.attributeTypeMap;
  }

  public constructor() {}
}
