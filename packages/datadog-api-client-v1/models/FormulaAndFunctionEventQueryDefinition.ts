/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "./FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventsDataSource } from "./FormulaAndFunctionEventsDataSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions events query.
 */
export class FormulaAndFunctionEventQueryDefinition {
  /**
   * Compute options.
   */
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * Data source for event platform-based queries.
   */
  "dataSource": FormulaAndFunctionEventsDataSource;
  /**
   * Group by options.
   */
  "groupBy"?: Array<FormulaAndFunctionEventQueryGroupBy>;
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
  "search"?: FormulaAndFunctionEventQueryDefinitionSearch;
  /**
   * Option for storage location. Feature in Private Beta.
   */
  "storage"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    compute: {
      baseName: "compute",
      type: "FormulaAndFunctionEventQueryDefinitionCompute",
      required: true,
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionEventsDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaAndFunctionEventQueryGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<string>",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "FormulaAndFunctionEventQueryDefinitionSearch",
    },
    storage: {
      baseName: "storage",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionEventQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
