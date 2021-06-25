/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The number of analyzed logs for each hour for a given organization.
 */

export class UsageAnalyzedLogsHour {
  /**
   * Contains the number of analyzed logs.
   */
  "analyzedLogs"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    analyzedLogs: {
      baseName: "analyzed_logs",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return UsageAnalyzedLogsHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageAnalyzedLogsHour {
    const res = new UsageAnalyzedLogsHour();

    res.analyzedLogs = ObjectSerializer.deserialize(
      data.analyzed_logs,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    return res;
  }

  static serialize(data: UsageAnalyzedLogsHour): { [key: string]: any } {
    const attributeTypes = UsageAnalyzedLogsHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.analyzed_logs = ObjectSerializer.serialize(
      data.analyzedLogs,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    return res;
  }

  public constructor() {}
}
