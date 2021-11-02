/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImageWidgetDefinitionType } from "./ImageWidgetDefinitionType";
import { WidgetHorizontalAlign } from "./WidgetHorizontalAlign";
import { WidgetImageSizing } from "./WidgetImageSizing";
import { WidgetMargin } from "./WidgetMargin";
import { WidgetVerticalAlign } from "./WidgetVerticalAlign";

export class ImageWidgetDefinition {
  /**
   * Whether to display a background or not.
   */
  "hasBackground"?: boolean;
  /**
   * Whether to display a border or not.
   */
  "hasBorder"?: boolean;
  "horizontalAlign"?: WidgetHorizontalAlign;
  "margin"?: WidgetMargin;
  "sizing"?: WidgetImageSizing;
  "type": ImageWidgetDefinitionType;
  /**
   * URL of the image.
   */
  "url": string;
  /**
   * URL of the image in dark mode.
   */
  "urlDarkTheme"?: string;
  "verticalAlign"?: WidgetVerticalAlign;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    hasBackground: {
      baseName: "has_background",
      type: "boolean",
    },
    hasBorder: {
      baseName: "has_border",
      type: "boolean",
    },
    horizontalAlign: {
      baseName: "horizontal_align",
      type: "WidgetHorizontalAlign",
    },
    margin: {
      baseName: "margin",
      type: "WidgetMargin",
    },
    sizing: {
      baseName: "sizing",
      type: "WidgetImageSizing",
    },
    type: {
      baseName: "type",
      type: "ImageWidgetDefinitionType",
      required: true,
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
    urlDarkTheme: {
      baseName: "url_dark_theme",
      type: "string",
    },
    verticalAlign: {
      baseName: "vertical_align",
      type: "WidgetVerticalAlign",
    },
  };

  static getAttributeTypeMap() {
    return ImageWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
