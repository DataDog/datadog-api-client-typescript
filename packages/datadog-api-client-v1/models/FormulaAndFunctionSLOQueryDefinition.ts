/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionSLODataSource } from "./FormulaAndFunctionSLODataSource";
import { FormulaAndFunctionSLOGroupMode } from "./FormulaAndFunctionSLOGroupMode";
import { FormulaAndFunctionSLOMeasure } from "./FormulaAndFunctionSLOMeasure";
import { FormulaAndFunctionSLOQueryType } from "./FormulaAndFunctionSLOQueryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula and functions metrics query.
 */
export class FormulaAndFunctionSLOQueryDefinition {
  /**
   * Additional filters applied to the SLO query.
   */
  "additionalQueryFilters"?: string;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaAndFunctionSLOQueryDefinition.attributeTypeMap;
  }

  public constructor() {}
}
