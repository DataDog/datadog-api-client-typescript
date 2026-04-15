import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CohortWidgetDefinitionType } from "./CohortWidgetDefinitionType";
import { RetentionGridRequest } from "./RetentionGridRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { WidgetTime } from "./WidgetTime";

/**
 * The cohort widget visualizes user retention over time.
 */
export class CohortWidgetDefinition {
  /**
   * The description of the widget.
   */
  "description"?: string;
  /**
   * List of Cohort widget requests.
   */
  "requests": Array<RetentionGridRequest>;
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
   * Type of the Cohort widget.
   */
  "type": CohortWidgetDefinitionType;
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
      type: "Array<RetentionGridRequest>",
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
      type: "CohortWidgetDefinitionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CohortWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
