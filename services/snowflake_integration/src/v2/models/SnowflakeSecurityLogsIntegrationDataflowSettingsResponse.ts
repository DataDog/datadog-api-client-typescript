import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the security logs dataflow.
 */
export class SnowflakeSecurityLogsIntegrationDataflowSettingsResponse {
  /**
   * How often security logs are collected, in minutes.
   */
  "securityLogsIntervalMin"?: number;
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
    securityLogsIntervalMin: {
      baseName: "security_logs_interval_min",
      type: "number",
      format: "int64",
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
    return SnowflakeSecurityLogsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
