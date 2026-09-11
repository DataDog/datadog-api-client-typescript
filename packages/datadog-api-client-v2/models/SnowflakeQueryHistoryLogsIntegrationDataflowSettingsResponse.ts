/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the query history logs dataflow.
 */
export class SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse {
  /**
   * Whether query logs are joined with Snowflake access history, which adds the objects each query read and wrote so you can follow how data is used and where it came from.
   */
  "joinQueryHistoryWithAccessHistoryEnabled"?: boolean;
  /**
   * How often query history logs are collected, in minutes.
   */
  "queryHistoryLogsIntervalMin"?: number;

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
    joinQueryHistoryWithAccessHistoryEnabled: {
      baseName: "join_query_history_with_access_history_enabled",
      type: "boolean",
    },
    queryHistoryLogsIntervalMin: {
      baseName: "query_history_logs_interval_min",
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
    return SnowflakeQueryHistoryLogsIntegrationDataflowSettingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
