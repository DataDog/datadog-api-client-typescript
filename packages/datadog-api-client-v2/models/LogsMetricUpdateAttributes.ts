/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricFilter } from "./LogsMetricFilter";
import { LogsMetricGroupBy } from "./LogsMetricGroupBy";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The log-based metric properties that will be updated.
 */

export class LogsMetricUpdateAttributes {
  "filter"?: LogsMetricFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<LogsMetricGroupBy>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    filter: {
      baseName: "filter",
      type: "LogsMetricFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsMetricGroupBy>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
