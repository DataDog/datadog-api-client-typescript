/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WidgetDefinition } from "./WidgetDefinition";
import { WidgetLayout } from "./WidgetLayout";

export class Widget {
  "definition": WidgetDefinition;
  /**
   * ID of the widget.
   */
  "id"?: number;
  "layout"?: WidgetLayout;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    definition: {
      baseName: "definition",
      type: "WidgetDefinition",
      required: true,
    },
    id: {
      baseName: "id",
      type: "number",

      format: "int64",
    },
    layout: {
      baseName: "layout",
      type: "WidgetLayout",
    },
  };

  static getAttributeTypeMap() {
    return Widget.attributeTypeMap;
  }

  public constructor() {}
}
