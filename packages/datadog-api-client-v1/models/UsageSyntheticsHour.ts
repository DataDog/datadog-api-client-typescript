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
 * The number of synthetics tests run for each hour for a given organization.
 */

export class UsageSyntheticsHour {
  /**
   * Contains the number of Synthetics API tests run.
   */
  "checkCallsCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    checkCallsCount: {
      baseName: "check_calls_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageSyntheticsHour.attributeTypeMap;
  }

  public constructor() {}
}
