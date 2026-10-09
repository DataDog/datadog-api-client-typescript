import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColor } from "./HeatgridColor";

/**
 * A position and color in a continuous gradient.
 */
export class HeatgridColorStop {
  /**
   * A color string, or two color strings for the light and dark themes, in that order.
   */
  "color": HeatgridColor;
  /**
   * Position in the gradient, from 0 to 100.
   */
  "position": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    color: {
      baseName: "color",
      type: "HeatgridColor",
      required: true,
    },
    position: {
      baseName: "position",
      type: "number",
      required: true,
      format: "int64",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridColorStop.attributeTypeMap;
  }

  public constructor() {}
}
