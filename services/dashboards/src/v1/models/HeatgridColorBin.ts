import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColor } from "./HeatgridColor";

/**
 * A color, optional lower threshold, and optional label for a discrete bin.
 */
export class HeatgridColorBin {
  /**
   * A color string, or two color strings for the light and dark themes, in that order.
   */
  "color": HeatgridColor;
  /**
   * Name of the bin.
   */
  "label"?: string;
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
    label: {
      baseName: "label",
      type: "string",
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
