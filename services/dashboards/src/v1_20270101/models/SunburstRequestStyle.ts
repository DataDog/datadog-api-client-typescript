import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstRequestStylePalette } from "./SunburstRequestStylePalette";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstRequestStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: SunburstRequestStylePalette;
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
      type: "SunburstRequestStylePalette",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstRequestStyle.attributeTypeMap;
  }

  public constructor() {}
}
