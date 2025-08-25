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
export class SLOHistorySLIData {
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
   * The state transition history for `monitor` or `time-slice` SLOs. It is represented as
   * an array of pairs. Each pair is an array containing the timestamp of the transition
   * as an integer in Unix epoch format in the first element, and the state as an integer in the
   * second element. An integer value of `0` for state means uptime, `1` means downtime, and `2` means no data.
   * Periods of no data count as uptime in time-slice SLOs, while for monitor SLOs, no data is counted
   * either as uptime or downtime depending on monitor settings. See
   * [SLO documentation](https://docs.datadoghq.com/service_management/service_level_objectives/monitor/#missing-data)
   * for detailed information.
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
   * A mapping of threshold `timeframe` to number of accurate decimals, regardless of the from && to timestamp.
   */
  "precision"?: { [key: string]: number };
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
      type: "{ [key: string]: number; }",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistorySLIData.attributeTypeMap;
  }

  public constructor() {}
}
