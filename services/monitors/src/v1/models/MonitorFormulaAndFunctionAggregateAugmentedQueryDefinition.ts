import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorFormulaAndFunctionAggregateAugmentedDataSource } from "./MonitorFormulaAndFunctionAggregateAugmentedDataSource";
import { MonitorFormulaAndFunctionAggregateAugmentQuery } from "./MonitorFormulaAndFunctionAggregateAugmentQuery";
import { MonitorFormulaAndFunctionAggregateBaseQuery } from "./MonitorFormulaAndFunctionAggregateBaseQuery";
import { MonitorFormulaAndFunctionAggregateQueryJoinCondition } from "./MonitorFormulaAndFunctionAggregateQueryJoinCondition";
import { MonitorFormulaAndFunctionEventQueryDefinitionCompute } from "./MonitorFormulaAndFunctionEventQueryDefinitionCompute";
import { MonitorFormulaAndFunctionEventQueryGroupBy } from "./MonitorFormulaAndFunctionEventQueryGroupBy";

/**
 * A formula and functions aggregate augmented query. Used to enrich base query results with data from a reference table.
 */
export class MonitorFormulaAndFunctionAggregateAugmentedQueryDefinition {
  /**
   * Augment query for aggregate augmented queries. Can be an events query or a reference table query.
   */
  "augmentQuery": MonitorFormulaAndFunctionAggregateAugmentQuery;
  /**
   * Base query for aggregate queries. Can be an events query or a metrics query.
   */
  "baseQuery": MonitorFormulaAndFunctionAggregateBaseQuery;
  /**
   * Compute options for the query.
   */
  "compute": Array<MonitorFormulaAndFunctionEventQueryDefinitionCompute>;
  /**
   * Data source for aggregate augmented queries.
   */
  "dataSource": MonitorFormulaAndFunctionAggregateAugmentedDataSource;
  /**
   * Group by options for the query.
   */
  "groupBy": Array<MonitorFormulaAndFunctionEventQueryGroupBy>;
  /**
   * Join condition for aggregate augmented queries.
   */
  "joinCondition": MonitorFormulaAndFunctionAggregateQueryJoinCondition;
  /**
   * Name of the query for use in formulas.
   */
  "name"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    augmentQuery: {
      baseName: "augment_query",
      type: "MonitorFormulaAndFunctionAggregateAugmentQuery",
      required: true,
    },
    baseQuery: {
      baseName: "base_query",
      type: "MonitorFormulaAndFunctionAggregateBaseQuery",
      required: true,
    },
    compute: {
      baseName: "compute",
      type: "Array<MonitorFormulaAndFunctionEventQueryDefinitionCompute>",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "MonitorFormulaAndFunctionAggregateAugmentedDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<MonitorFormulaAndFunctionEventQueryGroupBy>",
      required: true,
    },
    joinCondition: {
      baseName: "join_condition",
      type: "MonitorFormulaAndFunctionAggregateQueryJoinCondition",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorFormulaAndFunctionAggregateAugmentedQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
