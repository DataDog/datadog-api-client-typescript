/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionAggregateBaseQuery } from "./MonitorFormulaAndFunctionAggregateBaseQuery";
import { MonitorFormulaAndFunctionAggregateFilteredDataSource } from "./MonitorFormulaAndFunctionAggregateFilteredDataSource";
import { MonitorFormulaAndFunctionAggregateFilterQuery } from "./MonitorFormulaAndFunctionAggregateFilterQuery";
import { MonitorFormulaAndFunctionAggregateQueryFilter } from "./MonitorFormulaAndFunctionAggregateQueryFilter";
import { MonitorFormulaAndFunctionEventQueryDefinitionCompute } from "./MonitorFormulaAndFunctionEventQueryDefinitionCompute";
import { MonitorFormulaAndFunctionEventQueryGroupBy } from "./MonitorFormulaAndFunctionEventQueryGroupBy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions aggregate filtered query. Used to filter base query results using data from another source.
 */
export class MonitorFormulaAndFunctionAggregateFilteredQueryDefinition {
  /**
   * Base query for aggregate queries. Can be an events query or a metrics query.
   */
  "baseQuery": MonitorFormulaAndFunctionAggregateBaseQuery;
  /**
   * Compute options for the query.
   */
  "compute"?: Array<MonitorFormulaAndFunctionEventQueryDefinitionCompute>;
  /**
   * Data source for aggregate filtered queries.
   */
  "dataSource": MonitorFormulaAndFunctionAggregateFilteredDataSource;
  /**
   * Filter query for aggregate filtered queries. Can be an events query or a reference table query.
   */
  "filterQuery": MonitorFormulaAndFunctionAggregateFilterQuery;
  /**
   * Filter conditions for the query.
   */
  "filters": Array<MonitorFormulaAndFunctionAggregateQueryFilter>;
  /**
   * Group by options for the query.
   */
  "groupBy"?: Array<MonitorFormulaAndFunctionEventQueryGroupBy>;
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
    baseQuery: {
      baseName: "base_query",
      type: "MonitorFormulaAndFunctionAggregateBaseQuery",
      required: true,
    },
    compute: {
      baseName: "compute",
      type: "Array<MonitorFormulaAndFunctionEventQueryDefinitionCompute>",
    },
    dataSource: {
      baseName: "data_source",
      type: "MonitorFormulaAndFunctionAggregateFilteredDataSource",
      required: true,
    },
    filterQuery: {
      baseName: "filter_query",
      type: "MonitorFormulaAndFunctionAggregateFilterQuery",
      required: true,
    },
    filters: {
      baseName: "filters",
      type: "Array<MonitorFormulaAndFunctionAggregateQueryFilter>",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<MonitorFormulaAndFunctionEventQueryGroupBy>",
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
    return MonitorFormulaAndFunctionAggregateFilteredQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
