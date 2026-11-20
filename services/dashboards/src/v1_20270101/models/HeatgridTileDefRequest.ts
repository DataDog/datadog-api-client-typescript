import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { HeatgridTileDefRequestResponseFormat } from "./HeatgridTileDefRequestResponseFormat";
import { WidgetFormula } from "./WidgetFormula";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridTileDefRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formulas"?: Array<WidgetFormula>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": HeatgridTileDefRequestResponseFormat;
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
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "HeatgridTileDefRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTileDefRequest.attributeTypeMap;
  }

  public constructor() {}
}
