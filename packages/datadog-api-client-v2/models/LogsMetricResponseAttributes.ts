/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseCompute } from "./LogsMetricResponseCompute";
import { LogsMetricResponseFilter } from "./LogsMetricResponseFilter";
import { LogsMetricResponseGroupBy } from "./LogsMetricResponseGroupBy";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The object describing a Datadog log-based metric.
 */

export class LogsMetricResponseAttributes {
  "compute"?: LogsMetricResponseCompute;
  "filter"?: LogsMetricResponseFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<LogsMetricResponseGroupBy>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "LogsMetricResponseCompute",
    },
    filter: {
      baseName: "filter",
      type: "LogsMetricResponseFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsMetricResponseGroupBy>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
