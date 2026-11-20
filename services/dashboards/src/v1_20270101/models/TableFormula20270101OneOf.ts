import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionalFormats } from "./ConditionalFormats";
import { TableFormulaAnyOfAnyOfItemCellDisplayMode } from "./TableFormulaAnyOfAnyOfItemCellDisplayMode";
import { TableFormulaAnyOfAnyOfItemLimit } from "./TableFormulaAnyOfAnyOfItemLimit";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableFormula20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cellDisplayMode"?: TableFormulaAnyOfAnyOfItemCellDisplayMode;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cellDisplayModeOptions"?: any;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: ConditionalFormats;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "formula": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "limit"?: TableFormulaAnyOfAnyOfItemLimit;
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
    cellDisplayMode: {
      baseName: "cell_display_mode",
      type: "TableFormulaAnyOfAnyOfItemCellDisplayMode",
    },
    cellDisplayModeOptions: {
      baseName: "cell_display_mode_options",
      type: "any",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "ConditionalFormats",
    },
    formula: {
      baseName: "formula",
      type: "string",
      required: true,
    },
    limit: {
      baseName: "limit",
      type: "TableFormulaAnyOfAnyOfItemLimit",
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
    return TableFormula20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
