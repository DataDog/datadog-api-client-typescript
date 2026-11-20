import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { HostmapFormula } from "./HostmapFormula";
import { HostmapScalarFormulaRequestResponseFormat } from "./HostmapScalarFormulaRequestResponseFormat";
import { ScalarFormulaSort } from "./ScalarFormulaSort";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapScalarFormulaRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formulas": Array<HostmapFormula>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queries": Array<FormulaAndFunctionQueryDefinition>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": HostmapScalarFormulaRequestResponseFormat;
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
      type: "Array<HostmapFormula>",
      required: true,
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "HostmapScalarFormulaRequestResponseFormat",
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
    return HostmapScalarFormulaRequest.attributeTypeMap;
  }

  public constructor() {}
}
