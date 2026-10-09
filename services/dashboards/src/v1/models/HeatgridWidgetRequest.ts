import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { HeatgridWidgetFormula } from "./HeatgridWidgetFormula";
import { HeatgridWidgetResponseFormat } from "./HeatgridWidgetResponseFormat";

/**
 * A request for a heatgrid widget that uses formulas and functions.
 */
export class HeatgridWidgetRequest {
  /**
   * The single displayed formula can combine multiple queries.
   */
  "formulas"?: Array<HeatgridWidgetFormula>;
  /**
   * Queries returned directly or combined in a formula.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Response format for heatgrid queries.
   */
  "responseFormat": HeatgridWidgetResponseFormat;
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
      type: "Array<HeatgridWidgetFormula>",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "HeatgridWidgetResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
