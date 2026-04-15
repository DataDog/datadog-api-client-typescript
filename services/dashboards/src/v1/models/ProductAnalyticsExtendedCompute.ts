import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarInterval } from "./CalendarInterval";
import { FormulaAndFunctionEventAggregation } from "./FormulaAndFunctionEventAggregation";

/**
 * Compute configuration for Product Analytics Extended queries.
 */
export class ProductAnalyticsExtendedCompute {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": FormulaAndFunctionEventAggregation;
  /**
   * Fixed-width time bucket interval in milliseconds for time series queries. Mutually exclusive with `rollup`.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
   */
  "metric"?: string;
  /**
   * Name of the compute for use in formulas.
   */
  "name"?: string;
  /**
   * Calendar interval definition.
   */
  "rollup"?: CalendarInterval;
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
      type: "FormulaAndFunctionEventAggregation",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "double",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    rollup: {
      baseName: "rollup",
      type: "CalendarInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsExtendedCompute.attributeTypeMap;
  }

  public constructor() {}
}
