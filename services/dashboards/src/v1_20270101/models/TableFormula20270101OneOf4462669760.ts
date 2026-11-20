import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConditionalFormats } from "./ConditionalFormats";
import { TableFormulaAnyOfAnyOfItemCellDisplayMode4452532448 } from "./TableFormulaAnyOfAnyOfItemCellDisplayMode4452532448";
import { TableFormulaAnyOfAnyOfItemLimit4452334816 } from "./TableFormulaAnyOfAnyOfItemLimit4452334816";
import { TableTrendCellDisplayModeOptions } from "./TableTrendCellDisplayModeOptions";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableFormula20270101OneOf4462669760 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alias"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cellDisplayMode": TableFormulaAnyOfAnyOfItemCellDisplayMode4452532448;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "cellDisplayModeOptions"?: TableTrendCellDisplayModeOptions;
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
  "limit"?: TableFormulaAnyOfAnyOfItemLimit4452334816;
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
      type: "TableFormulaAnyOfAnyOfItemCellDisplayMode4452532448",
      required: true,
    },
    cellDisplayModeOptions: {
      baseName: "cell_display_mode_options",
      type: "TableTrendCellDisplayModeOptions",
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
      type: "TableFormulaAnyOfAnyOfItemLimit4452334816",
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
    return TableFormula20270101OneOf4462669760.attributeTypeMap;
  }

  public constructor() {}
}
