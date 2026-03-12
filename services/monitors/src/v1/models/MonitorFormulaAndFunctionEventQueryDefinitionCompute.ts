import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionEventAggregation } from "./MonitorFormulaAndFunctionEventAggregation";

/**
 * Compute options.
 */
export class MonitorFormulaAndFunctionEventQueryDefinitionCompute {
  /**
   * Aggregation methods for event platform queries.
   */
  "aggregation": MonitorFormulaAndFunctionEventAggregation;
  /**
   * A time interval in milliseconds.
   */
  "interval"?: number;
  /**
   * Measurable attribute to compute.
   */
  "metric"?: string;
  /**
   * The name assigned to this aggregation, when multiple aggregations are defined for a query.
   */
  "name"?: string;
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
      type: "MonitorFormulaAndFunctionEventAggregation",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return MonitorFormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
  }

  public constructor() {}
}
