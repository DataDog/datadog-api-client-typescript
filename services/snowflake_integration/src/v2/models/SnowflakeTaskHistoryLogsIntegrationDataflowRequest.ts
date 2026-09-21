import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest";

/**
 * Execution logs for your scheduled Snowflake tasks, covering start time, end time, status, and any error message.
 */
export class SnowflakeTaskHistoryLogsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `false`; set to `true` to start collection.
   */
  "enabled"?: boolean;
  /**
   * Settings of the task history logs dataflow. Only the fields provided are changed.
   */
  "settings"?: SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest;
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
      type: "SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeTaskHistoryLogsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
