import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Snowflake-specific settings for a data quality monitor.
 */
export class MonitorFormulaAndFunctionDataQualitySnowflakeSettings {
  /**
   * Snowflake warehouse to run this monitor's queries on instead of the integration user's
   * default warehouse. The name is case-sensitive, and the Datadog role must have `USAGE` on
   * the warehouse directly. Ignored for monitors that read catalog metadata instead of
   * running queries (such as default row count and freshness on base tables).
   */
  "warehouse"?: string;
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
    warehouse: {
      baseName: "warehouse",
      type: "string",
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
    return MonitorFormulaAndFunctionDataQualitySnowflakeSettings.attributeTypeMap;
  }

  public constructor() {}
}
