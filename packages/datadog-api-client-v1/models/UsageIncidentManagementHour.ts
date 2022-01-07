/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Incident management usage for a given organization for a given hour.
 */

export class UsageIncidentManagementHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the total number monthly active users from the start of the given hour's month until the given hour.
   */
  "monthlyActiveUsers"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    monthlyActiveUsers: {
      baseName: "monthly_active_users",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageIncidentManagementHour.attributeTypeMap;
  }

  public constructor() {}
}
