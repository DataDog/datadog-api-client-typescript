import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionSLODataSource } from "./FormulaAndFunctionSLODataSource";
import { FormulaAndFunctionSLOGroupMode } from "./FormulaAndFunctionSLOGroupMode";
import { FormulaAndFunctionSLOMeasure } from "./FormulaAndFunctionSLOMeasure";
import { FormulaAndFunctionSLOQueryType } from "./FormulaAndFunctionSLOQueryType";

/**
 * A formula and functions metrics query.
 */
export class FormulaAndFunctionSLOQueryDefinition {
  /**
   * Additional filters applied to the SLO query.
   */
  "additionalQueryFilters"?: string;
  /**
   * The source organization UUID for cross organization queries. Feature in Private Beta.
   */
  "crossOrgUuids"?: Array<string>;
  /**
   * Data source for SLO measures queries.
   */
  "dataSource": FormulaAndFunctionSLODataSource;
  /**
   * Group mode to query measures.
   */
  "groupMode"?: FormulaAndFunctionSLOGroupMode;
  /**
   * SLO measures queries.
   */
  "measure": FormulaAndFunctionSLOMeasure;
  /**
   * Name of the query for use in formulas.
   */
  "name"?: string;
  /**
   * ID of an SLO to query measures.
   */
  "sloId": string;
  /**
   * Name of the query for use in formulas.
   */
  "sloQueryType"?: FormulaAndFunctionSLOQueryType;
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
    additionalQueryFilters: {
      baseName: "additional_query_filters",
      type: "string",
    },
    crossOrgUuids: {
      baseName: "cross_org_uuids",
      type: "Array<string>",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionSLODataSource",
      required: true,
    },
    groupMode: {
      baseName: "group_mode",
      type: "FormulaAndFunctionSLOGroupMode",
    },
    measure: {
      baseName: "measure",
      type: "FormulaAndFunctionSLOMeasure",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    sloId: {
      baseName: "slo_id",
      type: "string",
      required: true,
    },
    sloQueryType: {
      baseName: "slo_query_type",
      type: "FormulaAndFunctionSLOQueryType",
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
    return FormulaAndFunctionSLOQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
