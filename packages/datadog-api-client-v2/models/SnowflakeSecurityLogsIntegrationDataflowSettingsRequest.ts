/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Settings of the security logs dataflow. Only the fields provided are changed.
 */
export class SnowflakeSecurityLogsIntegrationDataflowSettingsRequest {
  /**
   * How often security logs are collected, in minutes. One of `5`, `15`, `30`, `60`, `360`, `720`, or `1440`. Defaults to `5`.
   */
  "securityLogsIntervalMin"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    securityLogsIntervalMin: {
      baseName: "security_logs_interval_min",
      type: "number",
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SnowflakeSecurityLogsIntegrationDataflowSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
