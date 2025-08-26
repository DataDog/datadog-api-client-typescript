/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormulaCellDisplayModeOptions } from "./WidgetFormulaCellDisplayModeOptions";
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Formula to be used in a widget query.
 */
export class WidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  /**
   * Define a display mode for the table cell.
   */
  "cellDisplayMode"?: TableWidgetCellDisplayMode;
  /**
   * Cell display mode options for the widget formula. (only if `cell_display_mode` is set to `trend`).
   */
  "cellDisplayModeOptions"?: WidgetFormulaCellDisplayModeOptions;
  /**
   * List of conditional formats.
   */
  "conditionalFormats"?: Array<WidgetConditionalFormat>;
  /**
   * String expression built from queries, formulas, and functions.
   */
  "formula": string;
  /**
   * Options for limiting results returned.
   */
  "limit"?: WidgetFormulaLimit;
  /**
   * Number format options for the widget.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Styling options for widget formulas.
   */
  "style"?: WidgetFormulaStyle;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "TableWidgetCellDisplayMode",
    },
    cellDisplayModeOptions: {
      baseName: "cell_display_mode_options",
      type: "WidgetFormulaCellDisplayModeOptions",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<WidgetConditionalFormat>",
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
