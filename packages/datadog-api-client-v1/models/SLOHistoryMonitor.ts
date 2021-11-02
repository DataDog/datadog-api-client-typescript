/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";

export class SLOHistoryMonitor {
  /**
   * A mapping of threshold `timeframe` to the remaining error budget.
   */
  "errorBudgetRemaining"?: { [key: string]: number };
  /**
   * An array of error objects returned while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseErrorWithType>;
  /**
   * For groups in a grouped SLO, this is the group name.
   */
  "group"?: string;
  /**
   * For `monitor` based SLOs, this includes the aggregated history as arrays that include time series and uptime data where `0=monitor` is in `OK` state and `1=monitor` is in `alert` state.
   */
  "history"?: Array<Array<number>>;
  /**
   * For `monitor` based SLOs, this is the last modified timestamp in epoch seconds of the monitor.
   */
  "monitorModified"?: number;
  /**
   * For `monitor` based SLOs, this describes the type of monitor.
   */
  "monitorType"?: string;
  /**
   * For groups in a grouped SLO, this is the group name. For monitors in a multi-monitor SLO, this is the monitor name.
   */
  "name"?: string;
  /**
   * The amount of decimal places the SLI value is accurate to for the given from `&&` to timestamp. Use `span_precision` instead.
   */
  "precision"?: number;
  /**
   * For `monitor` based SLOs, when `true` this indicates that a replay is in progress to give an accurate uptime calculation.
   */
  "preview"?: boolean;
  /**
   * The current SLI value of the SLO over the history window.
   */
  "sliValue"?: number;
  /**
   * The amount of decimal places the SLI value is accurate to for the given from `&&` to timestamp.
   */
  "spanPrecision"?: number;
  /**
   * Use `sli_value` instead.
   */
  "uptime"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    errorBudgetRemaining: {
      baseName: "error_budget_remaining",
      type: "{ [key: string]: number; }",

      format: "double",
    },
    errors: {
      baseName: "errors",
      type: "Array<SLOHistoryResponseErrorWithType>",
    },
    group: {
      baseName: "group",
      type: "string",
    },
    history: {
      baseName: "history",
      type: "Array<Array<number>>",

      format: "double",
    },
    monitorModified: {
      baseName: "monitor_modified",
      type: "number",

      format: "int64",
    },
    monitorType: {
      baseName: "monitor_type",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    precision: {
      baseName: "precision",
      type: "number",

      format: "double",
    },
    preview: {
      baseName: "preview",
      type: "boolean",
    },
    sliValue: {
      baseName: "sli_value",
      type: "number",

      format: "double",
    },
    spanPrecision: {
      baseName: "span_precision",
      type: "number",

      format: "double",
    },
    uptime: {
      baseName: "uptime",
      type: "number",

      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryMonitor.attributeTypeMap;
  }

  public constructor() {}
}
