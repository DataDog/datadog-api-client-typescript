/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionEventQueryDefinitionCompute } from "./MonitorFormulaAndFunctionEventQueryDefinitionCompute";
import { MonitorFormulaAndFunctionEventQueryDefinitionSearch } from "./MonitorFormulaAndFunctionEventQueryDefinitionSearch";
import { MonitorFormulaAndFunctionEventQueryGroupBy } from "./MonitorFormulaAndFunctionEventQueryGroupBy";
import { MonitorFormulaAndFunctionEventsDataSource } from "./MonitorFormulaAndFunctionEventsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions events query.
 */
export class MonitorFormulaAndFunctionEventQueryDefinition {
  /**
   * Compute options.
   */
  "compute": MonitorFormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * Data source for event platform-based queries.
   */
  "dataSource": MonitorFormulaAndFunctionEventsDataSource;
  /**
   * Group by options.
   */
  "groupBy"?: Array<MonitorFormulaAndFunctionEventQueryGroupBy>;
  /**
   * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
   */
  "indexes"?: Array<string>;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Search options.
   */
  "search"?: MonitorFormulaAndFunctionEventQueryDefinitionSearch;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      type: "MonitorFormulaAndFunctionEventQueryDefinitionCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "MonitorFormulaAndFunctionEventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<MonitorFormulaAndFunctionEventQueryGroupBy>",
    },
    indexes: {
      type: "Array<string>",
    },
    name: {
      type: "string",
      required: true,
    },
    search: {
      type: "MonitorFormulaAndFunctionEventQueryDefinitionSearch",
    },
  };
}
