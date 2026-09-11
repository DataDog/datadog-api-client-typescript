import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the security logs dataflow. Only the fields provided are changed.
 */
export class SnowflakeSecurityLogsIntegrationDataflowSettingsRequest {
  /**
   * How often security logs are collected, in minutes. One of `5`, `15`, `30`, `60`, `360`, `720`, or `1440`. Defaults to `5`.
   */
  "securityLogsIntervalMin"?: number;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeSecurityLogsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
