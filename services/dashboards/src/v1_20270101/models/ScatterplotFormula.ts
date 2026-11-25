import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterPlotDimension } from "./ScatterPlotDimension";
import { ScatterplotFormulaLimit } from "./ScatterplotFormulaLimit";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotFormula {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimension": ScatterPlotDimension;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formula": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: ScatterplotFormulaLimit;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: WidgetFormulaStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alias: {
      baseName: "alias",
      type: "string",
    },
    dimension: {
      baseName: "dimension",
      type: "ScatterPlotDimension",
      required: true,
    },
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "ScatterplotFormulaLimit",
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    style: {
      baseName: "style",
      type: "WidgetFormulaStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotFormula.attributeTypeMap;
  }

  public constructor() {}
}
