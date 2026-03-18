import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionCostAggregator } from "./MonitorFormulaAndFunctionCostAggregator";
import { MonitorFormulaAndFunctionMetricsDataSource } from "./MonitorFormulaAndFunctionMetricsDataSource";

/**
 * A formula and functions cost query.
 */
export class MonitorFormulaAndFunctionCostQueryDefinition {
  /**
   * Aggregation methods for metric queries.
   */
  "aggregator"?: MonitorFormulaAndFunctionCostAggregator;
  /**
   * Data source for metrics queries.
   */
  "dataSource": MonitorFormulaAndFunctionMetricsDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * The monitor query.
   */
  "query": string;
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
    aggregator: {
      baseName: "aggregator",
      type: "MonitorFormulaAndFunctionCostAggregator",
    },
    dataSource: {
      baseName: "data_source",
      type: "MonitorFormulaAndFunctionMetricsDataSource",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    query: {
      baseName: "query",
      type: "string",
      required: true,
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
    return MonitorFormulaAndFunctionCostQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
