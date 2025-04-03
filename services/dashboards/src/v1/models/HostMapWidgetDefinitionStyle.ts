import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The style to apply to the widget.
 */
export class HostMapWidgetDefinitionStyle {
  /**
   * Max value to use to color the map.
   */
  "fillMax"?: string;
  /**
   * Min value to use to color the map.
   */
  "fillMin"?: string;
  /**
   * Color palette to apply to the widget.
   */
  "palette"?: string;
  /**
   * Whether to flip the palette tones.
   */
  "paletteFlip"?: boolean;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMapWidgetDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
