/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the query history logs dataflow. Only the fields provided are changed.
 */
export class SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest {
  /**
   * Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from. Defaults to `false`.
   */
  "joinQueryHistoryWithAccessHistoryEnabled"?: boolean;
  /**
   * How often query history logs are collected, in minutes. One of `5`, `15`, `30`, `60`, `720`, or `1440`. Defaults to `5`.
   */
  "queryHistoryLogsIntervalMin"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    joinQueryHistoryWithAccessHistoryEnabled: {
      baseName: "join_query_history_with_access_history_enabled",
      type: "boolean",
    },
    queryHistoryLogsIntervalMin: {
      baseName: "query_history_logs_interval_min",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeQueryHistoryLogsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
