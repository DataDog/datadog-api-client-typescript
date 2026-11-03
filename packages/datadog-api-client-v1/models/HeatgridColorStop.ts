/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridColor } from "./HeatgridColor";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
