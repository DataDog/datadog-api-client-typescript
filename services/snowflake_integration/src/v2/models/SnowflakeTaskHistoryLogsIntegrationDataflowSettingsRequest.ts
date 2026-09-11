import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the task history logs dataflow. Only the fields provided are changed.
 */
export class SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest {
  /**
   * How often task history logs are collected, in minutes. One of `5`, `15`, `30`, `60`, or `1440`. Defaults to `5`.
   */
  "taskHistoryLogsIntervalMin"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    taskHistoryLogsIntervalMin: {
      baseName: "task_history_logs_interval_min",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
