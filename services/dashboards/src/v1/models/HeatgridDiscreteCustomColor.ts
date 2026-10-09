import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColorBin } from "./HeatgridColorBin";
import { HeatgridCustomColorSource } from "./HeatgridCustomColorSource";
import { HeatgridDiscreteMode } from "./HeatgridDiscreteMode";

/**
 * Discrete thresholds with custom colors.
 */
export class HeatgridDiscreteCustomColor {
  /**
   * Two to six bins. Omit `lower_bound` on the first bin. Subsequent lower bounds must be in
   * ascending order.
   */
  "bins": Array<HeatgridColorBin>;
  /**
   * Use discrete color thresholds.
   */
  "mode": HeatgridDiscreteMode;
  /**
   * Use custom colors.
   */
  "source": HeatgridCustomColorSource;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    bins: {
      baseName: "bins",
      type: "Array<HeatgridColorBin>",
      required: true,
    },
    mode: {
      baseName: "mode",
      type: "HeatgridDiscreteMode",
      required: true,
    },
    source: {
      baseName: "source",
      type: "HeatgridCustomColorSource",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridDiscreteCustomColor.attributeTypeMap;
  }

  public constructor() {}
}
