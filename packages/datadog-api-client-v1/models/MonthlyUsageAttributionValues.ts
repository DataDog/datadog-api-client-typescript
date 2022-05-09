/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

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
   * The percentage of APM host usage by tag(s).
   */
  "apmHostPercentage"?: number;
  /**
   * The APM host usage by tag(s).
   */
  "apmHostUsage"?: number;
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
   * The percentage of custom metrics usage by tag(s).
   */
  "customTimeseriesPercentage"?: number;
  /**
   * The custom metrics usage by tag(s).
   */
  "customTimeseriesUsage"?: number;
  /**
   * The percentage of estimated live indexed logs usage by tag(s). This field is in private beta.
   */
  "estimatedIndexedLogsPercentage"?: number;
  /**
   * The estimated live indexed logs usage by tag(s). This field is in private beta.
   */
  "estimatedIndexedLogsUsage"?: number;
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
   * The percentage of indexed logs usage by tags.
   */
  "indexedLogsPercentage"?: number;
  /**
   * The indexed logs usage by tags.
   */
  "indexedLogsUsage"?: number;
  /**
   * The percentage of infrastructure host usage by tag(s).
   */
  "infraHostPercentage"?: number;
  /**
   * The infrastructure host usage by tag(s).
   */
  "infraHostUsage"?: number;
  /**
   * The percentage of Lambda invocation usage by tag(s).
   */
  "invocationsPercentage"?: number;
  /**
   * The Lambda invocation usage by tag(s).
   */
  "invocationsUsage"?: number;
  /**
   * The percentage of network host usage by tag(s).
   */
  "npmHostPercentage"?: number;
  /**
   * The network host usage by tag(s).
   */
  "npmHostUsage"?: number;
  /**
   * The percentage of profiled container usage by tag(s).
   */
  "profiledContainerPercentage"?: number;
  /**
   * The profiled container usage by tag(s).
   */
  "profiledContainerUsage"?: number;
  /**
   * The percentage of profiled hosts usage by tag(s).
   */
  "profiledHostPercentage"?: number;
  /**
   * The profiled hosts usage by tag(s).
   */
  "profiledHostUsage"?: number;
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
  "unparsedObject"?: any;

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
    indexedLogsPercentage: {
      baseName: "indexed_logs_percentage",
      type: "number",
      format: "double",
    },
    indexedLogsUsage: {
      baseName: "indexed_logs_usage",
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionValues.attributeTypeMap;
  }

  public constructor() {}
}
