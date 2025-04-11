import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsAggregationFunction } from "./LogsAggregationFunction";
import { LogsComputeType } from "./LogsComputeType";

/**
 * A compute rule to compute metrics or timeseries
 */
export class LogsCompute {
  /**
   * An aggregation function
   */
  "aggregation": LogsAggregationFunction;
  /**
   * The time buckets' size (only used for type=timeseries)
   * Defaults to a resolution of 150 points
   */
  "interval"?: string;
  /**
   * The metric to use
   */
  "metric"?: string;
  /**
   * The type of compute
   */
  "type"?: LogsComputeType;
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
    aggregation: {
      baseName: "aggregation",
      type: "LogsAggregationFunction",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "string",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsComputeType",
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
    return LogsCompute.attributeTypeMap;
  }

  public constructor() {}
}
