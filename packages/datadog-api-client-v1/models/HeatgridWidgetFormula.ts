/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A formula for a heatgrid widget request.
 */
export class HeatgridWidgetFormula {
  /**
   * Expression alias.
   */
  "alias"?: string;
  /**
   * Conditional formatting rules. These rules do not affect heatgrid rendering.
   * Use the widget-level `color` configuration to control cell colors.
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridWidgetFormula.attributeTypeMap;
  }

  public constructor() {}
}
