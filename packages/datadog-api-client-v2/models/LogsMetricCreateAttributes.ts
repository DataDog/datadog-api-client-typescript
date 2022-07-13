/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricCompute } from "./LogsMetricCompute";
import { LogsMetricFilter } from "./LogsMetricFilter";
import { LogsMetricGroupBy } from "./LogsMetricGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing the Datadog log-based metric to create.
 */
export class LogsMetricCreateAttributes {
  /**
   * The compute rule to compute the log-based metric.
   */
  "compute": LogsMetricCompute;
  /**
   * The log-based metric filter. Logs matching this filter will be aggregated in this metric.
   */
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
    compute: {
      baseName: "compute",
      type: "LogsMetricCompute",
      required: true,
    },
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
    return LogsMetricCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
