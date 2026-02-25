import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetType } from "./WidgetType";

/**
 * The definition of a widget, including its type and configuration.
 */
export class Definition {
  /**
   * The display title of the widget.
   */
  "title": string;
  /**
   * Widget types that are allowed to be stored as individual records in the 'widget' PG table.
   *
   * This is not a complete list of dashboards/notebooks widget types.
   */
  "type": WidgetType;
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
    title: {
      baseName: "title",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WidgetType",
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
    return Definition.attributeTypeMap;
  }

  public constructor() {}
}
