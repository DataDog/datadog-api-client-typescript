import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SLOListWidgetDefinitionType } from "./SLOListWidgetDefinitionType";
import { SLOListWidgetRequest } from "./SLOListWidgetRequest";
import { WidgetTextAlign } from "./WidgetTextAlign";

/**
 * Use the SLO List widget to track your SLOs (Service Level Objectives) on dashboards.
 */
export class SLOListWidgetDefinition {
  /**
   * Array of one request object to display in the widget.
   */
  "requests": [SLOListWidgetRequest];
  /**
   * Title of the widget.
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
   * Type of the SLO List widget.
   */
  "type": SLOListWidgetDefinitionType;
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
      type: "[SLOListWidgetRequest]",
      required: true,
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
      type: "SLOListWidgetDefinitionType",
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
    return SLOListWidgetDefinition.attributeTypeMap;
  }

  public constructor() {}
}
