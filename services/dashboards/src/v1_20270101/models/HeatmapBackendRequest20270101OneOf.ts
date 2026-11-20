import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { HeatmapBackendRequestAnyOfAnyOfItemResponseFormat } from "./HeatmapBackendRequestAnyOfAnyOfItemResponseFormat";
import { RequestStyle } from "./RequestStyle";
import { WidgetFormula } from "./WidgetFormula";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatmapBackendRequest20270101OneOf {
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
  "responseFormat": HeatmapBackendRequestAnyOfAnyOfItemResponseFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: RequestStyle;
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
      type: "HeatmapBackendRequestAnyOfAnyOfItemResponseFormat",
      required: true,
    },
    style: {
      baseName: "style",
      type: "RequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatmapBackendRequest20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
