import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsMetricResponseCompute } from "./LogsMetricResponseCompute";
import { LogsMetricResponseFilter } from "./LogsMetricResponseFilter";
import { LogsMetricResponseGroupBy } from "./LogsMetricResponseGroupBy";

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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
