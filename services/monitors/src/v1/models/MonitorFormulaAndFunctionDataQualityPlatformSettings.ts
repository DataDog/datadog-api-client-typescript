import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionDataQualitySnowflakeSettings } from "./MonitorFormulaAndFunctionDataQualitySnowflakeSettings";

/**
 * Platform-specific settings for a data quality monitor.
 */
export class MonitorFormulaAndFunctionDataQualityPlatformSettings {
  /**
   * Snowflake-specific settings for a data quality monitor.
   */
  "snowflake"?: MonitorFormulaAndFunctionDataQualitySnowflakeSettings;
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
    snowflake: {
      baseName: "snowflake",
      type: "MonitorFormulaAndFunctionDataQualitySnowflakeSettings",
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
    return MonitorFormulaAndFunctionDataQualityPlatformSettings.attributeTypeMap;
  }

  public constructor() {}
}
