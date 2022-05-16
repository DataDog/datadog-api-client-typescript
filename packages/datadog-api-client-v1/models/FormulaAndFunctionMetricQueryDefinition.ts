/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionMetricAggregation } from "./FormulaAndFunctionMetricAggregation";
import { FormulaAndFunctionMetricDataSource } from "./FormulaAndFunctionMetricDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions metrics query.
 */
export class FormulaAndFunctionMetricQueryDefinition {
  /**
   * The aggregation methods available for metrics queries.
   */
  "aggregator"?: FormulaAndFunctionMetricAggregation;
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
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregator: {
      baseName: "aggregator",
      type: "FormulaAndFunctionMetricAggregation",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionMetricQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
