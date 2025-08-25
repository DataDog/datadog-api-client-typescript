/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionCostAggregator } from "./MonitorFormulaAndFunctionCostAggregator";
import { MonitorFormulaAndFunctionCostDataSource } from "./MonitorFormulaAndFunctionCostDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions cost query.
 */
export class MonitorFormulaAndFunctionCostQueryDefinition {
  /**
   * Aggregation methods for metric queries.
   */
  "aggregator"?: MonitorFormulaAndFunctionCostAggregator;
  /**
   * Data source for cost queries.
   */
  "dataSource": MonitorFormulaAndFunctionCostDataSource;
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
      type: "MonitorFormulaAndFunctionCostDataSource",
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
      type: "any",
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
