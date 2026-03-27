import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FreeTextWidgetDefinitionType } from "./FreeTextWidgetDefinitionType";
import { WidgetTextAlign } from "./WidgetTextAlign";

/**
 * Free text is a widget that allows you to add headings to your dashboard. Commonly used to state the overall purpose of the dashboard.
 */
export class FreeTextWidgetDefinition {
  /**
   * Background color of the widget. Supported values are `white`, `blue`, `purple`, `pink`, `orange`, `yellow`, `green`, `gray`, `vivid_blue`, `vivid_purple`, `vivid_pink`, `vivid_orange`, `vivid_yellow`, `vivid_green`, and `transparent`.
   */
  "backgroundColor"?: string;
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
    backgroundColor: {
      baseName: "background_color",
      type: "string",
    },
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
