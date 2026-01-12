import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionDataQualityModelTypeOverride } from "./MonitorFormulaAndFunctionDataQualityModelTypeOverride";

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
   * Override for the model type used in anomaly detection.
   */
  "modelTypeOverride"?: MonitorFormulaAndFunctionDataQualityModelTypeOverride;
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
    modelTypeOverride: {
      baseName: "model_type_override",
      type: "MonitorFormulaAndFunctionDataQualityModelTypeOverride",
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
