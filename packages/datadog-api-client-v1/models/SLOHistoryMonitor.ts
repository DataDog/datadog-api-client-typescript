/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An object that holds an SLI value and its associated data. It can represent an SLO's overall SLI value.
 * This can also represent the SLI value for a specific monitor in multi-monitor SLOs, or a group in grouped SLOs.
 */
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
   * For `monitor` based SLOs, this includes the aggregated history as arrays that include timeseries and uptime data where `0=monitor` is in `OK` state and `1=monitor` is in `alert` state.
   */
  "history"?: Array<[number, number]>;
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
   * For `monitor` based SLOs, when `true` this indicates that a replay is in progress to give an accurate uptime
   * calculation.
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

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errorBudgetRemaining: {
      baseName: "error_budget_remaining",
      type: "{ [key: string]: number; }",
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
      type: "Array<[number, number]>",
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistoryMonitor.attributeTypeMap;
  }

  public constructor() {}
}
