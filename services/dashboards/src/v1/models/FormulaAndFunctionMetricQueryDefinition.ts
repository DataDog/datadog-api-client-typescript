import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionMetricAggregation } from "./FormulaAndFunctionMetricAggregation";
import { FormulaAndFunctionMetricDataSource } from "./FormulaAndFunctionMetricDataSource";
import { FormulaAndFunctionMetricSemanticMode } from "./FormulaAndFunctionMetricSemanticMode";

/**
 * A formula and functions metrics query.
 */
export class FormulaAndFunctionMetricQueryDefinition {
  /**
   * The aggregation methods available for metrics queries.
   */
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for metrics queries.
   */
  "dataSource": FormulaAndFunctionMetricDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Metrics query definition.
   */
  "query": string;
  /**
   * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed.
   */
  "semanticMode"?: FormulaAndFunctionMetricSemanticMode;
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
      type: "FormulaAndFunctionMetricAggregation",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionMetricDataSource",
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
    semanticMode: {
      baseName: "semantic_mode",
      type: "FormulaAndFunctionMetricSemanticMode",
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
    return FormulaAndFunctionMetricQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
