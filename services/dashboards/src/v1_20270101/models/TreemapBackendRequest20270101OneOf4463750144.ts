import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453527168 } from "./TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453527168";
import { TreemapRequestStyle } from "./TreemapRequestStyle";
import { WidgetFormula } from "./WidgetFormula";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapBackendRequest20270101OneOf4463750144 {
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
  "responseFormat": TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453527168;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sort"?: ScalarFormulaSort;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: TreemapRequestStyle;
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
      type: "TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453527168",
      required: true,
    },
    sort: {
      baseName: "sort",
      type: "ScalarFormulaSort",
    },
    style: {
      baseName: "style",
      type: "TreemapRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreemapBackendRequest20270101OneOf4463750144.attributeTypeMap;
  }

  public constructor() {}
}
