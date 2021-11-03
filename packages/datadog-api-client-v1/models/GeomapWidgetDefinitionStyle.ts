/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
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

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
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

  static getAttributeTypeMap() {
    return GeomapWidgetDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
