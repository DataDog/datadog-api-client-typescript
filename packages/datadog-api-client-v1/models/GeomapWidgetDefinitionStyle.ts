/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * The style to apply to the widget.
 */
export class GeomapWidgetDefinitionStyle {
  /**
   * The color palette to apply to the widget.
   */
  "palette": string;
  /**
   * Whether to flip the palette tones.
   */
  "paletteFlip": boolean;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    palette: {
      baseName: "palette",
      type: "string",
      required: true,
    },
    paletteFlip: {
      baseName: "palette_flip",
      type: "boolean",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapWidgetDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
