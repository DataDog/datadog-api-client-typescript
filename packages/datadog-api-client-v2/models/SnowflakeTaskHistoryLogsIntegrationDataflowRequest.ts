/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest } from "./SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Execution logs for your scheduled Snowflake tasks, covering start and end time, status, and any error message.
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
      type: "SnowflakeTaskHistoryLogsIntegrationDataflowSettingsRequest",
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
    return SnowflakeTaskHistoryLogsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
