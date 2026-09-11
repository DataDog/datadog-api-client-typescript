import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse";

/**
 * Execution logs for your scheduled Snowflake tasks, covering start and end time, status, and any error message.
 */
export class SnowflakeTaskHistoryLogsIntegrationDataflowResponse {
  /**
   * Whether Datadog collects this data.
   */
  "enabled"?: boolean;
  /**
   * Settings of the task history logs dataflow.
   */
  "settings"?: SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    settings: {
      baseName: "settings",
      type: "SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse",
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
    return SnowflakeTaskHistoryLogsIntegrationDataflowResponse.attributeTypeMap;
  }

  public constructor() {}
}
