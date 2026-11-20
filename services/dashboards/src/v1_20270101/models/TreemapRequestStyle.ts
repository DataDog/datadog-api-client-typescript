import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TreemapRequestStylePalette } from "./TreemapRequestStylePalette";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreemapRequestStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: TreemapRequestStylePalette;
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
      type: "TreemapRequestStylePalette",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreemapRequestStyle.attributeTypeMap;
  }

  public constructor() {}
}
