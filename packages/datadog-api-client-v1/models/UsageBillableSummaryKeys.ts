/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageBillableSummaryBody } from "./UsageBillableSummaryBody";

import { AttributeTypeMap } from "../util";

/**
 * Response with aggregated usage types.
 */
export class UsageBillableSummaryKeys {
  /**
   * Response with properties for each aggregated usage type.
   */
  "apmHostSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "apmHostTop99P"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "apmTraceSearchSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "fargateContainerAverage"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "infraContainerSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "infraHostSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "infraHostTop99P"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "iotTop99P"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "lambdaFunctionAverage"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed15DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed180DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed30DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed3DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed45DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed60DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed7DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexed90DaySum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexedCustomRetentionSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIndexedSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "logsIngestedSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "networkDeviceTop99P"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "npmFlowSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "npmHostSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "npmHostTop99P"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "profContainerSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "profHostTop99P"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "rumSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "serverlessInvocationSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "siemSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "syntheticsApiTestsSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "syntheticsBrowserChecksSum"?: UsageBillableSummaryBody;
  /**
   * Response with properties for each aggregated usage type.
   */
  "timeseriesAverage"?: UsageBillableSummaryBody;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    apmHostSum: {
      baseName: "apm_host_sum",
      type: "UsageBillableSummaryBody",
    },
    apmHostTop99P: {
      baseName: "apm_host_top99p",
      type: "UsageBillableSummaryBody",
    },
    apmTraceSearchSum: {
      baseName: "apm_trace_search_sum",
      type: "UsageBillableSummaryBody",
    },
    fargateContainerAverage: {
      baseName: "fargate_container_average",
      type: "UsageBillableSummaryBody",
    },
    infraContainerSum: {
      baseName: "infra_container_sum",
      type: "UsageBillableSummaryBody",
    },
    infraHostSum: {
      baseName: "infra_host_sum",
      type: "UsageBillableSummaryBody",
    },
    infraHostTop99P: {
      baseName: "infra_host_top99p",
      type: "UsageBillableSummaryBody",
    },
    iotTop99P: {
      baseName: "iot_top99p",
      type: "UsageBillableSummaryBody",
    },
    lambdaFunctionAverage: {
      baseName: "lambda_function_average",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed15DaySum: {
      baseName: "logs_indexed_15day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed180DaySum: {
      baseName: "logs_indexed_180day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed30DaySum: {
      baseName: "logs_indexed_30day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed3DaySum: {
      baseName: "logs_indexed_3day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed45DaySum: {
      baseName: "logs_indexed_45day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed60DaySum: {
      baseName: "logs_indexed_60day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed7DaySum: {
      baseName: "logs_indexed_7day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexed90DaySum: {
      baseName: "logs_indexed_90day_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexedCustomRetentionSum: {
      baseName: "logs_indexed_custom_retention_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIndexedSum: {
      baseName: "logs_indexed_sum",
      type: "UsageBillableSummaryBody",
    },
    logsIngestedSum: {
      baseName: "logs_ingested_sum",
      type: "UsageBillableSummaryBody",
    },
    networkDeviceTop99P: {
      baseName: "network_device_top99p",
      type: "UsageBillableSummaryBody",
    },
    npmFlowSum: {
      baseName: "npm_flow_sum",
      type: "UsageBillableSummaryBody",
    },
    npmHostSum: {
      baseName: "npm_host_sum",
      type: "UsageBillableSummaryBody",
    },
    npmHostTop99P: {
      baseName: "npm_host_top99p",
      type: "UsageBillableSummaryBody",
    },
    profContainerSum: {
      baseName: "prof_container_sum",
      type: "UsageBillableSummaryBody",
    },
    profHostTop99P: {
      baseName: "prof_host_top99p",
      type: "UsageBillableSummaryBody",
    },
    rumSum: {
      baseName: "rum_sum",
      type: "UsageBillableSummaryBody",
    },
    serverlessInvocationSum: {
      baseName: "serverless_invocation_sum",
      type: "UsageBillableSummaryBody",
    },
    siemSum: {
      baseName: "siem_sum",
      type: "UsageBillableSummaryBody",
    },
    syntheticsApiTestsSum: {
      baseName: "synthetics_api_tests_sum",
      type: "UsageBillableSummaryBody",
    },
    syntheticsBrowserChecksSum: {
      baseName: "synthetics_browser_checks_sum",
      type: "UsageBillableSummaryBody",
    },
    timeseriesAverage: {
      baseName: "timeseries_average",
      type: "UsageBillableSummaryBody",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageBillableSummaryKeys.attributeTypeMap;
  }

  public constructor() {}
}
