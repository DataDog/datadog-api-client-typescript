import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ToplistWidgetDefinitionType } from "./ToplistWidgetDefinitionType";
import { ToplistWidgetRequest } from "./ToplistWidgetRequest";
import { ToplistWidgetStyle } from "./ToplistWidgetStyle";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The top list visualization enables you to display a list of Tag value like hostname or service with the most or least of any metric value, such as highest consumers of CPU, hosts with the least disk space, etc.
 */
export class ToplistWidgetDefinition {
  /**
   * List of custom links.
   */
  "customLinks"?: Array<WidgetCustomLink>;
  /**
   * List of top list widget requests.
   */
  "requests": Array<ToplistWidgetRequest>;
  /**
   * Style customization for a top list widget.
   */
  "style"?: ToplistWidgetStyle;
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * Title of your widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * Size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of the top list widget.
   */
  "type": ToplistWidgetDefinitionType;
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
    customLinks: {
      baseName: "custom_links",
      type: "Array<WidgetCustomLink>",
    },
    requests: {
      baseName: "requests",
      type: "Array<ToplistWidgetRequest>",
      required: true,
    },
    style: {
      baseName: "style",
      type: "ToplistWidgetStyle",
    },
    time: {
      baseName: "time",
      type: "WidgetTime",
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
      type: "ToplistWidgetDefinitionType",
      required: true,
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
    return ToplistWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
