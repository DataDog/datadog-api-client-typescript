import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { TopologyRequestCustomProjection } from "./TopologyRequestCustomProjection";
import { TopologyRequestCustomResponseFormat } from "./TopologyRequestCustomResponseFormat";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetSortBy } from "./WidgetSortBy";

/**
 * Scalar request whose result rows become nodes.
 */
export class TopologyRequestCustom {
  /**
   * List of formulas that operate on queries.
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * Mapping from result columns to node fields. Each result row feeds one node.
   */
  "projection": TopologyRequestCustomProjection;
  /**
   * List of queries that can be returned directly or used in formulas.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Response format of a custom topology map request.
   */
  "responseFormat": TopologyRequestCustomResponseFormat;
  /**
   * The controls for sorting the widget.
   */
  "sort"?: WidgetSortBy;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    projection: {
      baseName: "projection",
      type: "TopologyRequestCustomProjection",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "TopologyRequestCustomResponseFormat",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "WidgetSortBy",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TopologyRequestCustom.attributeTypeMap;
  }

  public constructor() {}
}
