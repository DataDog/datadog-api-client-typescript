/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ImageWidgetDefinitionType } from "./ImageWidgetDefinitionType";
import { WidgetHorizontalAlign } from "./WidgetHorizontalAlign";
import { WidgetImageSizing } from "./WidgetImageSizing";
import { WidgetMargin } from "./WidgetMargin";
import { WidgetVerticalAlign } from "./WidgetVerticalAlign";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The image widget allows you to embed an image on your dashboard. An image can be a PNG, JPG, or animated GIF. Only available on FREE layout dashboards.
 */
export class ImageWidgetDefinition {
  /**
   * Whether to display a background or not.
   */
  "hasBackground"?: boolean;
  /**
   * Whether to display a border or not.
   */
  "hasBorder"?: boolean;
  /**
   * Horizontal alignment.
   */
  "horizontalAlign"?: WidgetHorizontalAlign;
  /**
   * Size of the margins around the image.
   * **Note**: `small` and `large` values are deprecated.
   */
  "margin"?: WidgetMargin;
  /**
   * How to size the image on the widget. The values are based on the image `object-fit` CSS properties.
   * **Note**: `zoom`, `fit` and `center` values are deprecated.
   */
  "sizing"?: WidgetImageSizing;
  /**
   * Type of the image widget.
   */
  "type": ImageWidgetDefinitionType;
  /**
   * URL of the image.
   */
  "url": string;
  /**
   * URL of the image in dark mode.
   */
  "urlDarkTheme"?: string;
  /**
   * Vertical alignment.
   */
  "verticalAlign"?: WidgetVerticalAlign;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ImageWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
