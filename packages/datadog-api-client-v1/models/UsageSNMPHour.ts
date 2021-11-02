/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageSNMPHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of SNMP devices.
   */
  "snmpDevices"?: number;

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
    snmpDevices: {
      baseName: "snmp_devices",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageSNMPHour.attributeTypeMap;
  }

  public constructor() {}
}
