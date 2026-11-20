import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapBackendDefinitionStyle {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fillMax"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "fillMin"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "paletteFlip"?: boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    fillMax: {
      baseName: "fill_max",
      type: "string",
    },
    fillMin: {
      baseName: "fill_min",
      type: "string",
    },
    palette: {
      baseName: "palette",
      type: "string",
    },
    paletteFlip: {
      baseName: "palette_flip",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapBackendDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
