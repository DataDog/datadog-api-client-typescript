import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451371744 } from "./ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451371744";
import { ScatterplotFormula } from "./ScatterplotFormula";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotBackendTableRequest20270101OneOf4461524480 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formulas": Array<ScatterplotFormula>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451371744;
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
    formulas: {
      baseName: "formulas",
      type: "Array<ScatterplotFormula>",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451371744",
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
    return ScatterplotBackendTableRequest20270101OneOf4461524480.attributeTypeMap;
  }

  public constructor() {}
}
