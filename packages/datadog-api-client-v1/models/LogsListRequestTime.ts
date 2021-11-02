/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class LogsListRequestTime {
  /**
   * Minimum timestamp for requested logs.
   */
  "from": Date;
  /**
   * Timezone can be specified both as an offset (e.g. \"UTC+03:00\") or a regional zone (e.g. \"Europe/Paris\").
   */
  "timezone"?: string;
  /**
   * Maximum timestamp for requested logs.
   */
  "to": Date;

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
    from: {
      baseName: "from",
      type: "Date",
      required: true,
      format: "date-time",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "Date",
      required: true,
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return LogsListRequestTime.attributeTypeMap;
  }

  public constructor() {}
}
