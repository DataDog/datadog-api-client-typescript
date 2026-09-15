import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeSecurityLogsIntegrationDataflowSettingsRequest } from "./SnowflakeSecurityLogsIntegrationDataflowSettingsRequest";

/**
 * Security logs from the Snowflake `ACCOUNT_USAGE` schema, for analyzing the security of your Snowflake account and running threat detection with [Cloud SIEM](https://docs.datadoghq.com/security/cloud_siem/).
 */
export class SnowflakeSecurityLogsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the security logs dataflow. Only the fields provided are changed.
   */
  "settings"?: SnowflakeSecurityLogsIntegrationDataflowSettingsRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "SnowflakeSecurityLogsIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeSecurityLogsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
