import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapStylePalette } from "./GeomapStylePalette";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette": GeomapStylePalette;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "paletteFlip": boolean;
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
      type: "GeomapStylePalette",
      required: true,
    },
    paletteFlip: {
      baseName: "palette_flip",
      type: "boolean",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapStyle.attributeTypeMap;
  }

  public constructor() {}
}
