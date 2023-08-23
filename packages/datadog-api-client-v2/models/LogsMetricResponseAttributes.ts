/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricResponseCompute } from "./LogsMetricResponseCompute";
import { LogsMetricResponseFilter } from "./LogsMetricResponseFilter";
import { LogsMetricResponseGroupBy } from "./LogsMetricResponseGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing a Datadog log-based metric.
 */
export class LogsMetricResponseAttributes {
  /**
   * The compute rule to compute the log-based metric.
   */
  "compute"?: LogsMetricResponseCompute;
  /**
   * The log-based metric filter. Logs matching this filter will be aggregated in this metric.
   */
  "filter"?: LogsMetricResponseFilter;
  /**
   * The rules for the group by.
   */
  "groupBy"?: Array<LogsMetricResponseGroupBy>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      type: "LogsMetricResponseCompute",
    },
    filter: {
      type: "LogsMetricResponseFilter",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<LogsMetricResponseGroupBy>",
    },
  };
}
