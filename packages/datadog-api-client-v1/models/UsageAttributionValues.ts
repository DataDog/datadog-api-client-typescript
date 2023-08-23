/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Fields in Usage Summary by tag(s).
 */
export class UsageAttributionValues {
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
   * The percentage of synthetic browser test usage by tag(s).
   */
  "browserPercentage"?: number;
  /**
   * The synthetic browser test usage by tag(s).
   */
  "browserUsage"?: number;
  /**
   * The percentage of container usage by tag(s).
   */
  "containerPercentage"?: number;
  /**
   * The container usage by tag(s).
   */
  "containerUsage"?: number;
  /**
   * The percentage of Cloud Security Posture Management container usage by tag(s)
   */
  "cspmContainerPercentage"?: number;
  /**
   * The Cloud Security Posture Management container usage by tag(s)
   */
  "cspmContainerUsage"?: number;
  /**
   * The percentage of Cloud Security Posture Management host usage by tag(s)
   */
  "cspmHostPercentage"?: number;
  /**
   * The Cloud Security Posture Management host usage by tag(s)
   */
  "cspmHostUsage"?: number;
  /**
   * The percentage of custom metrics usage by tag(s).
   */
  "customTimeseriesPercentage"?: number;
  /**
   * The custom metrics usage by tag(s).
   */
  "customTimeseriesUsage"?: number;
  /**
   * The percentage of Cloud Workload Security container usage by tag(s)
   */
  "cwsContainerPercentage"?: number;
  /**
   * The Cloud Workload Security container usage by tag(s)
   */
  "cwsContainerUsage"?: number;
  /**
   * The percentage of Cloud Workload Security host usage by tag(s)
   */
  "cwsHostPercentage"?: number;
  /**
   * The Cloud Workload Security host usage by tag(s)
   */
  "cwsHostUsage"?: number;
  /**
   * The percentage of Database Monitoring host usage by tag(s).
   */
  "dbmHostsPercentage"?: number;
  /**
   * The Database Monitoring host usage by tag(s).
   */
  "dbmHostsUsage"?: number;
  /**
   * The percentage of Database Monitoring normalized queries usage by tag(s).
   */
  "dbmQueriesPercentage"?: number;
  /**
   * The Database Monitoring normalized queries usage by tag(s).
   */
  "dbmQueriesUsage"?: number;
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
   * The percentage of infrastructure host usage by tag(s).
   */
  "infraHostPercentage"?: number;
  /**
   * The infrastructure host usage by tag(s).
   */
  "infraHostUsage"?: number;
  /**
   * The percentage of Lambda function usage by tag(s).
   */
  "lambdaFunctionsPercentage"?: number;
  /**
   * The Lambda function usage by tag(s).
   */
  "lambdaFunctionsUsage"?: number;
  /**
   * The percentage of Lambda invocation usage by tag(s).
   */
  "lambdaInvocationsPercentage"?: number;
  /**
   * The Lambda invocation usage by tag(s).
   */
  "lambdaInvocationsUsage"?: number;
  /**
   * The percentage of network host usage by tag(s).
   */
  "npmHostPercentage"?: number;
  /**
   * The network host usage by tag(s).
   */
  "npmHostUsage"?: number;
  /**
   * The percentage of profiled containers usage by tag(s).
   */
  "profiledContainerPercentage"?: number;
  /**
   * The profiled container usage by tag(s).
   */
  "profiledContainerUsage"?: number;
  /**
   * The percentage of profiled hosts usage by tag(s).
   */
  "profiledHostsPercentage"?: number;
  /**
   * The profiled host usage by tag(s).
   */
  "profiledHostsUsage"?: number;
  /**
   * The percentage of network device usage by tag(s).
   */
  "snmpPercentage"?: number;
  /**
   * The network device usage by tag(s).
   */
  "snmpUsage"?: number;

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
    cspmContainerPercentage: {
      baseName: "cspm_container_percentage",
      type: "number",
      format: "double",
    },
    cspmContainerUsage: {
      baseName: "cspm_container_usage",
      type: "number",
      format: "double",
    },
    cspmHostPercentage: {
      baseName: "cspm_host_percentage",
      type: "number",
      format: "double",
    },
    cspmHostUsage: {
      baseName: "cspm_host_usage",
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
    cwsContainerPercentage: {
      baseName: "cws_container_percentage",
      type: "number",
      format: "double",
    },
    cwsContainerUsage: {
      baseName: "cws_container_usage",
      type: "number",
      format: "double",
    },
    cwsHostPercentage: {
      baseName: "cws_host_percentage",
      type: "number",
      format: "double",
    },
    cwsHostUsage: {
      baseName: "cws_host_usage",
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
    lambdaFunctionsPercentage: {
      baseName: "lambda_functions_percentage",
      type: "number",
      format: "double",
    },
    lambdaFunctionsUsage: {
      baseName: "lambda_functions_usage",
      type: "number",
      format: "double",
    },
    lambdaInvocationsPercentage: {
      baseName: "lambda_invocations_percentage",
      type: "number",
      format: "double",
    },
    lambdaInvocationsUsage: {
      baseName: "lambda_invocations_usage",
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
    profiledHostsPercentage: {
      baseName: "profiled_hosts_percentage",
      type: "number",
      format: "double",
    },
    profiledHostsUsage: {
      baseName: "profiled_hosts_usage",
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
  };
}
