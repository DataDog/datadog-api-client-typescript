/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertValueWidgetDefinitionType } from "./AlertValueWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";

export class AlertValueWidgetDefinition {
  /**
   * ID of the alert to use in the widget.
   */
  "alertId": string;
  /**
   * Number of decimal to show. If not defined, will use the raw value.
   */
  "precision"?: number;
  "textAlign"?: WidgetTextAlign;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of value in the widget.
   */
  "titleSize"?: string;
  "type": AlertValueWidgetDefinitionType;
  /**
   * Unit to display with the value.
   */
  "unit"?: string;

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
    alertId: {
      baseName: "alert_id",
      type: "string",
      required: true,
    },
    precision: {
      baseName: "precision",
      type: "number",

      format: "int64",
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
    },
    titleSize: {
      baseName: "title_size",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "AlertValueWidgetDefinitionType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return AlertValueWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
