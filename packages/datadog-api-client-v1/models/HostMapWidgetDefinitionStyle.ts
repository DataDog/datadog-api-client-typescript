/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
    return HostMapWidgetDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
