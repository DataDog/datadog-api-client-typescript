import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaDoraQueryDataSource } from "./FormulaDoraQueryDataSource";
import { FormulaDoraQuerySearch } from "./FormulaDoraQuerySearch";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDoraQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaDoraQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: Array<FormulaAndFunctionEventQueryGroupBy>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "indexes": Array<any>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search"?: FormulaDoraQuerySearch;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

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
      type: "FormulaDoraQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<FormulaAndFunctionEventQueryGroupBy>",
    },
    indexes: {
      baseName: "indexes",
      type: "Array<any>",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "FormulaDoraQuerySearch",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDoraQuery.attributeTypeMap;
  }

  public constructor() {}
}
