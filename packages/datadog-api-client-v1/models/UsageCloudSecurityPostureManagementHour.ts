/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageCloudSecurityPostureManagementHour {
  /**
   * The total number of Cloud Security Posture Management containers during a given hour.
   */
  "containerCount"?: number;
  /**
   * The total number of Cloud Security Posture Management hosts during a given hour.
   */
  "hostCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The organization name.
   */
  "orgName"?: string;
  /**
   * The organization public ID.
   */
  "publicId"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    containerCount: {
      baseName: "container_count",
      type: "number",

      format: "int64",
    },
    hostCount: {
      baseName: "host_count",
      type: "number",

      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",

      format: "date-time",
    },
    orgName: {
      baseName: "org_name",
      type: "string",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return UsageCloudSecurityPostureManagementHour.attributeTypeMap;
  }

  public constructor() {}
}
