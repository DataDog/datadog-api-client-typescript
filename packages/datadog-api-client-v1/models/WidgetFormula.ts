/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";

import { AttributeTypeMap } from "../util";

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
   * @ignore
   */
  "unparsedObject"?: any;

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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetFormula.attributeTypeMap;
  }

  public constructor() {}
}
