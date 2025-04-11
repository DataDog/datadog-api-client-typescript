import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FunnelWidgetDefinitionType } from "./FunnelWidgetDefinitionType";
import { FunnelWidgetRequest } from "./FunnelWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The funnel visualization displays a funnel of user sessions that maps a sequence of view navigation and user interaction in your application.
 */
export class FunnelWidgetDefinition {
  /**
   * Request payload used to query items.
   */
  "requests": [FunnelWidgetRequest];
  /**
   * Time setting for the widget.
   */
  "time"?: WidgetTime;
  /**
   * The title of the widget.
   */
  "title"?: string;
  /**
   * How to align the text on the widget.
   */
  "titleAlign"?: WidgetTextAlign;
  /**
   * The size of the title.
   */
  "titleSize"?: string;
  /**
   * Type of funnel widget.
   */
  "type": FunnelWidgetDefinitionType;
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
    requests: {
      baseName: "requests",
      type: "[FunnelWidgetRequest]",
      required: true,
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
      type: "FunnelWidgetDefinitionType",
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
    return FunnelWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
