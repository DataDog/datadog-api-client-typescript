import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { JourneyMapWidgetDefinitionType } from "./JourneyMapWidgetDefinitionType";
import { JourneyMapWidgetRequest } from "./JourneyMapWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The Journey Paths widget visualizes the paths users take between two steps of a Product Analytics journey.
 */
export class JourneyMapWidgetDefinition {
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * List of Journey Paths widget requests. Exactly one request is supported.
   */
  "requests": [JourneyMapWidgetRequest];
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
   * Type of the Journey Paths widget.
   */
  "type": JourneyMapWidgetDefinitionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    description: {
      baseName: "description",
      type: "string",
    },
    requests: {
      baseName: "requests",
      type: "[JourneyMapWidgetRequest]",
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
      type: "JourneyMapWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return JourneyMapWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
