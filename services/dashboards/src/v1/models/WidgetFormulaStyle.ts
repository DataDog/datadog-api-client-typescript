import { AttributeTypeMap } from "@datadog/datadog-api-client";

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
    palette: {
      baseName: "palette",
      type: "string",
    },
    paletteIndex: {
      baseName: "palette_index",
      type: "number",
      format: "int64",
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
    return WidgetFormulaStyle.attributeTypeMap;
  }

  public constructor() {}
}
