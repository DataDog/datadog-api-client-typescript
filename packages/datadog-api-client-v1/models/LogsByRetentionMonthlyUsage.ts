/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Object containing a summary of indexed logs usage by retention period for a single month.
 */

export class LogsByRetentionMonthlyUsage {
  /**
   * The month for the usage.
   */
  "date"?: string;
  /**
   * Indexed logs usage for each active retention for the month.
   */
  "usage"?: Array<LogsRetentionSumUsage>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    date: {
      baseName: "date",
      type: "string",
      format: "datetime",
    },
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionSumUsage>",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsByRetentionMonthlyUsage.attributeTypeMap;
  }

  public constructor() {}
}
