/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridColorBin } from "./HeatgridColorBin";
import { HeatgridCustomColorSource } from "./HeatgridCustomColorSource";
import { HeatgridDiscreteMode } from "./HeatgridDiscreteMode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
