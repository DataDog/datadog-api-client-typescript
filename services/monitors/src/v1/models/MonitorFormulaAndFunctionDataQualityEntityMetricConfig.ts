import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Measure configuration for one side of a source to target comparison.
 */
export class MonitorFormulaAndFunctionDataQualityEntityMetricConfig {
  /**
   * Custom SQL query used to compute the measure for this entity.
   */
  "customSql"?: string;
  /**
   * Custom WHERE clause applied when computing the measure for this entity.
   */
  "customWhere"?: string;
  /**
   * Identifier of the data entity to measure.
   */
  "entityId": string;
  /**
   * Type of the data entity to measure.
   */
  "entityType": string;
  /**
   * Columns to group results by when computing the measure for this entity.
   */
  "groupByColumns"?: Array<string>;
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
    customSql: {
      baseName: "custom_sql",
      type: "string",
    },
    customWhere: {
      baseName: "custom_where",
      type: "string",
    },
    entityId: {
      baseName: "entity_id",
      type: "string",
      required: true,
    },
    entityType: {
      baseName: "entity_type",
      type: "string",
      required: true,
    },
    groupByColumns: {
      baseName: "group_by_columns",
      type: "Array<string>",
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
    return MonitorFormulaAndFunctionDataQualityEntityMetricConfig.attributeTypeMap;
  }

  public constructor() {}
}
