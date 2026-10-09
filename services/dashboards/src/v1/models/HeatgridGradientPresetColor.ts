import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridGradientMode } from "./HeatgridGradientMode";
import { HeatgridPresetColorSource } from "./HeatgridPresetColorSource";

/**
 * A preset gradient color palette.
 */
export class HeatgridGradientPresetColor {
  /**
   * Use a continuous color gradient.
   */
  "mode": HeatgridGradientMode;
  /**
   * Name of the preset color palette.
   */
  "presetName": string;
  /**
   * Use a preset color palette.
   */
  "source": HeatgridPresetColorSource;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "HeatgridGradientMode",
      required: true,
    },
    presetName: {
      baseName: "preset_name",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridPresetColorSource",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridGradientPresetColor.attributeTypeMap;
  }

  public constructor() {}
}
