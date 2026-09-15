import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest } from "./SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest";

/**
 * Account-level usage metrics read from the Snowflake `ACCOUNT_USAGE` schema, covering storage usage, credit consumption, and query activity.
 */
export class SnowflakeAccountUsageMetricsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the account usage metrics dataflow. Only the fields provided are changed.
   */
  "settings"?: SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest;
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
      type: "SnowflakeAccountUsageMetricsIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeAccountUsageMetricsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
