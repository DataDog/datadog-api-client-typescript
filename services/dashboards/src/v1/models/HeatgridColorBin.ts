import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColor } from "./HeatgridColor";

/**
 * A color and optional lower threshold for a discrete bin.
 */
export class HeatgridColorBin {
  /**
   * A color string, or two color strings for the light and dark themes, in that order.
   */
  "color": HeatgridColor;
  /**
   * Inclusive lower bound. Omit for the first bin.
   */
  "lowerBound"?: number;
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
    lowerBound: {
      baseName: "lower_bound",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridColorBin.attributeTypeMap;
  }

  public constructor() {}
}
