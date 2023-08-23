/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Styling options for widget formulas.
 */
export class WidgetFormulaStyle {
  /**
   * The color palette used to display the formula. A guide to the available color palettes can be found at https://docs.datadoghq.com/dashboards/guide/widget_colors
   */
  "palette"?: string;
  /**
   * Index specifying which color to use within the palette.
   */
  "paletteIndex"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    palette: {
      type: "string",
    },
    paletteIndex: {
      baseName: "palette_index",
      type: "number",
      format: "int64",
    },
  };
}
