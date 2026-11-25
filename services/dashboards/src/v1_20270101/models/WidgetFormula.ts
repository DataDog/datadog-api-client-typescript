import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetFormula {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formula": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: WidgetFormulaLimit;
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
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "WidgetFormulaLimit",
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
    return WidgetFormula.attributeTypeMap;
  }

  public constructor() {}
}
