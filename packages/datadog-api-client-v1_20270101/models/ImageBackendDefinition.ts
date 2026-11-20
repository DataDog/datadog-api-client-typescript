/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ImageBackendDefinition20270101Sizing } from "./ImageBackendDefinition20270101Sizing";
import { ImageBackendDefinitionHorizontalAlign } from "./ImageBackendDefinitionHorizontalAlign";
import { ImageBackendDefinitionType } from "./ImageBackendDefinitionType";
import { ImageBackendDefinitionVerticalAlign } from "./ImageBackendDefinitionVerticalAlign";
import { ImageMargin } from "./ImageMargin";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ImageBackendDefinition {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "caption"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hasBackground"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hasBorder"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "horizontalAlign"?: ImageBackendDefinitionHorizontalAlign;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "margin"?: ImageMargin;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sizing"?: ImageBackendDefinition20270101Sizing;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ImageBackendDefinitionType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "url": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "urlDarkTheme"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "verticalAlign"?: ImageBackendDefinitionVerticalAlign;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    caption: {
      baseName: "caption",
      type: "string",
    },
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
      type: "ImageBackendDefinitionHorizontalAlign",
    },
    margin: {
      baseName: "margin",
      type: "ImageMargin",
    },
    sizing: {
      baseName: "sizing",
      type: "ImageBackendDefinition20270101Sizing",
    },
    type: {
      baseName: "type",
      type: "ImageBackendDefinitionType",
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
      type: "ImageBackendDefinitionVerticalAlign",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ImageBackendDefinition.attributeTypeMap;
  }

  public constructor() {}
}
