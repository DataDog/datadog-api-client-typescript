import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";
import { ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453033088 } from "./ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453033088";
import { WidgetFormula } from "./WidgetFormula";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendRequest20270101OneOf4463319360 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
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
  "responseFormat": ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453033088;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ScalarFormulaSort;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
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
      type: "ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453033088",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ScalarFormulaSort",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendRequest20270101OneOf4463319360.attributeTypeMap;
  }

  public constructor() {}
}
