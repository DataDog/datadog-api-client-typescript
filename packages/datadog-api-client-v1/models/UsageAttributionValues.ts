/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

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
   * The percentage of Lambda function usage by tag(s).  **Note** this field is deprecated. Use lambda_functions_percentage instead.
   */
  "lambdaPercentage"?: number;
  /**
   * The Lambda function usage by tag(s).  **Note** this field is deprecated. Use lambda_functions_usage instead.
   */
  "lambdaUsage"?: number;
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
  "profiledContainersPercentage"?: number;
  /**
   * The profiled container usage by tag(s).
   */
  "profiledContainersUsage"?: number;
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

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
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
    lambdaPercentage: {
      baseName: "lambda_percentage",
      type: "number",
      format: "double",
    },
    lambdaUsage: {
      baseName: "lambda_usage",
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
    profiledContainersPercentage: {
      baseName: "profiled_containers_percentage",
      type: "number",
      format: "double",
    },
    profiledContainersUsage: {
      baseName: "profiled_containers_usage",
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

  static getAttributeTypeMap() {
    return UsageAttributionValues.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageAttributionValues {
    const res = new UsageAttributionValues();

    res.apiPercentage = ObjectSerializer.deserialize(
      data.api_percentage,
      "number",
      "double"
    );

    res.apiUsage = ObjectSerializer.deserialize(
      data.api_usage,
      "number",
      "double"
    );

    res.apmHostPercentage = ObjectSerializer.deserialize(
      data.apm_host_percentage,
      "number",
      "double"
    );

    res.apmHostUsage = ObjectSerializer.deserialize(
      data.apm_host_usage,
      "number",
      "double"
    );

    res.browserPercentage = ObjectSerializer.deserialize(
      data.browser_percentage,
      "number",
      "double"
    );

    res.browserUsage = ObjectSerializer.deserialize(
      data.browser_usage,
      "number",
      "double"
    );

    res.containerPercentage = ObjectSerializer.deserialize(
      data.container_percentage,
      "number",
      "double"
    );

    res.containerUsage = ObjectSerializer.deserialize(
      data.container_usage,
      "number",
      "double"
    );

    res.customTimeseriesPercentage = ObjectSerializer.deserialize(
      data.custom_timeseries_percentage,
      "number",
      "double"
    );

    res.customTimeseriesUsage = ObjectSerializer.deserialize(
      data.custom_timeseries_usage,
      "number",
      "double"
    );

    res.cwsContainerPercentage = ObjectSerializer.deserialize(
      data.cws_container_percentage,
      "number",
      "double"
    );

    res.cwsContainerUsage = ObjectSerializer.deserialize(
      data.cws_container_usage,
      "number",
      "double"
    );

    res.cwsHostPercentage = ObjectSerializer.deserialize(
      data.cws_host_percentage,
      "number",
      "double"
    );

    res.cwsHostUsage = ObjectSerializer.deserialize(
      data.cws_host_usage,
      "number",
      "double"
    );

    res.infraHostPercentage = ObjectSerializer.deserialize(
      data.infra_host_percentage,
      "number",
      "double"
    );

    res.infraHostUsage = ObjectSerializer.deserialize(
      data.infra_host_usage,
      "number",
      "double"
    );

    res.lambdaFunctionsPercentage = ObjectSerializer.deserialize(
      data.lambda_functions_percentage,
      "number",
      "double"
    );

    res.lambdaFunctionsUsage = ObjectSerializer.deserialize(
      data.lambda_functions_usage,
      "number",
      "double"
    );

    res.lambdaInvocationsPercentage = ObjectSerializer.deserialize(
      data.lambda_invocations_percentage,
      "number",
      "double"
    );

    res.lambdaInvocationsUsage = ObjectSerializer.deserialize(
      data.lambda_invocations_usage,
      "number",
      "double"
    );

    res.lambdaPercentage = ObjectSerializer.deserialize(
      data.lambda_percentage,
      "number",
      "double"
    );

    res.lambdaUsage = ObjectSerializer.deserialize(
      data.lambda_usage,
      "number",
      "double"
    );

    res.npmHostPercentage = ObjectSerializer.deserialize(
      data.npm_host_percentage,
      "number",
      "double"
    );

    res.npmHostUsage = ObjectSerializer.deserialize(
      data.npm_host_usage,
      "number",
      "double"
    );

    res.profiledContainersPercentage = ObjectSerializer.deserialize(
      data.profiled_containers_percentage,
      "number",
      "double"
    );

    res.profiledContainersUsage = ObjectSerializer.deserialize(
      data.profiled_containers_usage,
      "number",
      "double"
    );

    res.profiledHostsPercentage = ObjectSerializer.deserialize(
      data.profiled_hosts_percentage,
      "number",
      "double"
    );

    res.profiledHostsUsage = ObjectSerializer.deserialize(
      data.profiled_hosts_usage,
      "number",
      "double"
    );

    res.snmpPercentage = ObjectSerializer.deserialize(
      data.snmp_percentage,
      "number",
      "double"
    );

    res.snmpUsage = ObjectSerializer.deserialize(
      data.snmp_usage,
      "number",
      "double"
    );

    return res;
  }

  static serialize(data: UsageAttributionValues): { [key: string]: any } {
    const attributeTypes = UsageAttributionValues.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.api_percentage = ObjectSerializer.serialize(
      data.apiPercentage,
      "number",
      "double"
    );

    res.api_usage = ObjectSerializer.serialize(
      data.apiUsage,
      "number",
      "double"
    );

    res.apm_host_percentage = ObjectSerializer.serialize(
      data.apmHostPercentage,
      "number",
      "double"
    );

    res.apm_host_usage = ObjectSerializer.serialize(
      data.apmHostUsage,
      "number",
      "double"
    );

    res.browser_percentage = ObjectSerializer.serialize(
      data.browserPercentage,
      "number",
      "double"
    );

    res.browser_usage = ObjectSerializer.serialize(
      data.browserUsage,
      "number",
      "double"
    );

    res.container_percentage = ObjectSerializer.serialize(
      data.containerPercentage,
      "number",
      "double"
    );

    res.container_usage = ObjectSerializer.serialize(
      data.containerUsage,
      "number",
      "double"
    );

    res.custom_timeseries_percentage = ObjectSerializer.serialize(
      data.customTimeseriesPercentage,
      "number",
      "double"
    );

    res.custom_timeseries_usage = ObjectSerializer.serialize(
      data.customTimeseriesUsage,
      "number",
      "double"
    );

    res.cws_container_percentage = ObjectSerializer.serialize(
      data.cwsContainerPercentage,
      "number",
      "double"
    );

    res.cws_container_usage = ObjectSerializer.serialize(
      data.cwsContainerUsage,
      "number",
      "double"
    );

    res.cws_host_percentage = ObjectSerializer.serialize(
      data.cwsHostPercentage,
      "number",
      "double"
    );

    res.cws_host_usage = ObjectSerializer.serialize(
      data.cwsHostUsage,
      "number",
      "double"
    );

    res.infra_host_percentage = ObjectSerializer.serialize(
      data.infraHostPercentage,
      "number",
      "double"
    );

    res.infra_host_usage = ObjectSerializer.serialize(
      data.infraHostUsage,
      "number",
      "double"
    );

    res.lambda_functions_percentage = ObjectSerializer.serialize(
      data.lambdaFunctionsPercentage,
      "number",
      "double"
    );

    res.lambda_functions_usage = ObjectSerializer.serialize(
      data.lambdaFunctionsUsage,
      "number",
      "double"
    );

    res.lambda_invocations_percentage = ObjectSerializer.serialize(
      data.lambdaInvocationsPercentage,
      "number",
      "double"
    );

    res.lambda_invocations_usage = ObjectSerializer.serialize(
      data.lambdaInvocationsUsage,
      "number",
      "double"
    );

    res.lambda_percentage = ObjectSerializer.serialize(
      data.lambdaPercentage,
      "number",
      "double"
    );

    res.lambda_usage = ObjectSerializer.serialize(
      data.lambdaUsage,
      "number",
      "double"
    );

    res.npm_host_percentage = ObjectSerializer.serialize(
      data.npmHostPercentage,
      "number",
      "double"
    );

    res.npm_host_usage = ObjectSerializer.serialize(
      data.npmHostUsage,
      "number",
      "double"
    );

    res.profiled_containers_percentage = ObjectSerializer.serialize(
      data.profiledContainersPercentage,
      "number",
      "double"
    );

    res.profiled_containers_usage = ObjectSerializer.serialize(
      data.profiledContainersUsage,
      "number",
      "double"
    );

    res.profiled_hosts_percentage = ObjectSerializer.serialize(
      data.profiledHostsPercentage,
      "number",
      "double"
    );

    res.profiled_hosts_usage = ObjectSerializer.serialize(
      data.profiledHostsUsage,
      "number",
      "double"
    );

    res.snmp_percentage = ObjectSerializer.serialize(
      data.snmpPercentage,
      "number",
      "double"
    );

    res.snmp_usage = ObjectSerializer.serialize(
      data.snmpUsage,
      "number",
      "double"
    );

    return res;
  }

  public constructor() {}
}
