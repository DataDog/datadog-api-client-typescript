import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionDataQualityModelConfiguration } from "./MonitorFormulaAndFunctionDataQualityModelConfiguration";
import { MonitorFormulaAndFunctionDataQualityModelTypeOverride } from "./MonitorFormulaAndFunctionDataQualityModelTypeOverride";
import { MonitorFormulaAndFunctionDataQualitySourceToTargetConfig } from "./MonitorFormulaAndFunctionDataQualitySourceToTargetConfig";

/**
 * Monitor configuration options for data quality queries.
 */
export class MonitorFormulaAndFunctionDataQualityMonitorOptions {
  /**
   * Crontab expression to override the default schedule.
   */
  "crontabOverride"?: string;
  /**
   * Custom SQL query for the monitor.
   */
  "customSql"?: string;
  /**
   * Custom WHERE clause for the query.
   */
  "customWhere"?: string;
  /**
   * Columns to group results by.
   */
  "groupByColumns"?: Array<string>;
  /**
   * Tuning options for the anomaly detection model used by the monitor.
   */
  "modelConfiguration"?: MonitorFormulaAndFunctionDataQualityModelConfiguration;
  /**
   * Override for the model type used in anomaly detection.
   */
  "modelTypeOverride"?: MonitorFormulaAndFunctionDataQualityModelTypeOverride;
  /**
   * Sensitivity of the anomaly detection model, expressed as a multiplier on the width
   * of the predicted bounds. Higher values widen the bounds and produce fewer alerts;
   * lower values tighten them and produce more alerts. Defaults to `3.0`.
   */
  "sensitivity"?: number;
  /**
   * Configuration for a source to target monitor, which compares the same measure
   * across two data entities and alerts on the difference between them.
   */
  "sourceToTargetConfig"?: MonitorFormulaAndFunctionDataQualitySourceToTargetConfig;
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
    crontabOverride: {
      baseName: "crontab_override",
      type: "string",
    },
    customSql: {
      baseName: "custom_sql",
      type: "string",
    },
    customWhere: {
      baseName: "custom_where",
      type: "string",
    },
    groupByColumns: {
      baseName: "group_by_columns",
      type: "Array<string>",
    },
    modelConfiguration: {
      baseName: "model_configuration",
      type: "MonitorFormulaAndFunctionDataQualityModelConfiguration",
    },
    modelTypeOverride: {
      baseName: "model_type_override",
      type: "MonitorFormulaAndFunctionDataQualityModelTypeOverride",
    },
    sensitivity: {
      baseName: "sensitivity",
      type: "number",
      format: "double",
    },
    sourceToTargetConfig: {
      baseName: "source_to_target_config",
      type: "MonitorFormulaAndFunctionDataQualitySourceToTargetConfig",
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
    return MonitorFormulaAndFunctionDataQualityMonitorOptions.attributeTypeMap;
  }

  public constructor() {}
}
