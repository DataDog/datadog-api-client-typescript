import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetFormulaStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
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
      baseName: "palette",
      type: "string",
      required: true,
    },
    paletteIndex: {
      baseName: "palette_index",
      type: "number",
      format: "double",
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
