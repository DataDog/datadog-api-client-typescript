import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Settings of the task history logs dataflow.
 */
export class SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse {
  /**
   * How often task history logs are collected, in minutes.
   */
  "taskHistoryLogsIntervalMin"?: number;
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
    taskHistoryLogsIntervalMin: {
      baseName: "task_history_logs_interval_min",
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
    return SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
