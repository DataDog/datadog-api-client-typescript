/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsMonitorThresholds } from "./ProductAnalyticsMonitorThresholds";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Options of a Product Analytics monitor.
 */
export class ProductAnalyticsMonitorOptions {
  /**
   * UUID of the chart the monitor was created from.
   */
  "chartUuid"?: string;
  /**
   * Metric of the chart that the monitor evaluates.
   */
  "metricSelector"?: string;
  /**
   * Index of the chart query that the monitor evaluates.
   */
  "queryIndex"?: Int64;
  /**
   * Number of minutes after the last notification before the monitor notifies again on the current status.
   * `0` means it never notifies again.
   */
  "renotifyInterval"?: Int64;
  /**
   * Alert thresholds of a Product Analytics monitor.
   * Keep `critical` in sync with the comparison in the monitor query; the query is not derived from these values.
   */
  "thresholds"?: ProductAnalyticsMonitorThresholds;
  /**
   * Time frame of the chart that the monitor evaluates.
   */
  "timeframe"?: string;
  /**
   * Query variables referenced by the monitor query.
   */
  "variables"?: Array<{ [key: string]: any }>;

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
    chartUuid: {
      baseName: "chart_uuid",
      type: "string",
    },
    metricSelector: {
      baseName: "metric_selector",
      type: "string",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int64",
    },
    renotifyInterval: {
      baseName: "renotify_interval",
      type: "number",
      format: "int64",
    },
    thresholds: {
      baseName: "thresholds",
      type: "ProductAnalyticsMonitorThresholds",
    },
    timeframe: {
      baseName: "timeframe",
      type: "string",
    },
    variables: {
      baseName: "variables",
      type: "Array<{ [key: string]: any; }>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsMonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
