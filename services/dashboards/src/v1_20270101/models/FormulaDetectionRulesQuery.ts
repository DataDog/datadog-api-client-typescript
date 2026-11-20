import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaDetectionRulesQuery20270101GroupBy } from "./FormulaDetectionRulesQuery20270101GroupBy";
import { FormulaDetectionRulesQueryDataSource } from "./FormulaDetectionRulesQueryDataSource";
import { FormulaDetectionRulesQuerySearch } from "./FormulaDetectionRulesQuerySearch";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaDetectionRulesQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "compute": FormulaAndFunctionEventQueryDefinitionCompute;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dataSource": FormulaDetectionRulesQueryDataSource;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupBy"?: FormulaDetectionRulesQuery20270101GroupBy;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "search": FormulaDetectionRulesQuerySearch;
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
      type: "FormulaDetectionRulesQueryDataSource",
      required: true,
    },
    groupBy: {
      baseName: "group_by",
      type: "FormulaDetectionRulesQuery20270101GroupBy",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    search: {
      baseName: "search",
      type: "FormulaDetectionRulesQuerySearch",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaDetectionRulesQuery.attributeTypeMap;
  }

  public constructor() {}
}
