/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FreeTextWidgetDefinitionType } from "./FreeTextWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Free text is a widget that allows you to add headings to your screenboard. Commonly used to state the overall purpose of the dashboard. Only available on FREE layout dashboards.
 */
export class FreeTextWidgetDefinition {
  /**
   * Color of the text.
   */
  "color"?: string;
  /**
   * Size of the text.
   */
  "fontSize"?: string;
  /**
   * Text to display.
   */
  "text": string;
  /**
   * How to align the text on the widget.
   */
  "textAlign"?: WidgetTextAlign;
  /**
   * Type of the free text widget.
   */
  "type": FreeTextWidgetDefinitionType;

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
    color: {
      baseName: "color",
      type: "string",
    },
    fontSize: {
      baseName: "font_size",
      type: "string",
    },
    text: {
      baseName: "text",
      type: "string",
      required: true,
    },
    textAlign: {
      baseName: "text_align",
      type: "WidgetTextAlign",
    },
    type: {
      baseName: "type",
      type: "FreeTextWidgetDefinitionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FreeTextWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
