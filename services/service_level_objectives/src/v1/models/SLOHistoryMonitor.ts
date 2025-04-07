import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";

/**
 * An object that holds an SLI value and its associated data. It can represent an SLO's overall SLI value.
 * This can also represent the SLI value for a specific monitor in multi-monitor SLOs, or a group in grouped SLOs.
 */
export class SLOHistoryMonitor {
  /**
   * A mapping of threshold `timeframe` to the remaining error budget.
   */
  "errorBudgetRemaining"?: any;
  /**
   * An array of error objects returned while querying the history data for the service level objective.
   */
  "errors"?: Array<SLOHistoryResponseErrorWithType>;
  /**
   * For groups in a grouped SLO, this is the group name.
   */
  "group"?: string;
  /**
   * The state transition history for the monitor. It is represented as
   * an array of pairs. Each pair is an array containing the timestamp of the transition
   * as an integer in Unix epoch format in the first element, and the state as an integer in the
   * second element. An integer value of `0` for state means uptime, `1` means downtime, and `2` means no data.
   * Periods of no data are counted either as uptime or downtime depending on monitor settings.
   * See [SLO documentation](https://docs.datadoghq.com/service_management/service_level_objectives/monitor/#missing-data)
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
      type: "any",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
