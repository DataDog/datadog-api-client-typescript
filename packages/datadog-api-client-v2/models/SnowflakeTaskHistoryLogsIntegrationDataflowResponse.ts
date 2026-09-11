/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
