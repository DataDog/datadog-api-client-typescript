/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageRumSessionsHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of RUM Sessions.
   */
  "sessionCount"?: number;
  /**
   * Contains the number of mobile RUM Sessions on Android (data available beginning December 1, 2020).
   */
  "sessionCountAndroid"?: number;
  /**
   * Contains the number of mobile RUM Sessions on iOS (data available beginning December 1, 2020).
   */
  "sessionCountIos"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    hour: {
      baseName: "hour",
      type: "Date",

      format: "date-time",
    },
    sessionCount: {
      baseName: "session_count",
      type: "number",

      format: "int64",
    },
    sessionCountAndroid: {
      baseName: "session_count_android",
      type: "number",

      format: "int64",
    },
    sessionCountIos: {
      baseName: "session_count_ios",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageRumSessionsHour.attributeTypeMap;
  }

  public constructor() {}
}
