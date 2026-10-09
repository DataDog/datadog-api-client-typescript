import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColorStop } from "./HeatgridColorStop";
import { HeatgridCustomColorSource } from "./HeatgridCustomColorSource";
import { HeatgridGradientMode } from "./HeatgridGradientMode";

/**
 * A continuous gradient with custom color stops.
 */
export class HeatgridGradientCustomColor {
  /**
   * Use a continuous color gradient.
   */
  "mode": HeatgridGradientMode;
  /**
   * Use custom colors.
   */
  "source": HeatgridCustomColorSource;
  /**
   * Two to six stops with positions in ascending order.
   */
  "stops": Array<HeatgridColorStop>;
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
    source: {
      baseName: "source",
      type: "HeatgridCustomColorSource",
      required: true,
    },
    stops: {
      baseName: "stops",
      type: "Array<HeatgridColorStop>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridGradientCustomColor.attributeTypeMap;
  }

  public constructor() {}
}
