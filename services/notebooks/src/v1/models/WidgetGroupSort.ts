import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GroupType } from "./GroupType";
import { WidgetSort } from "./WidgetSort";

/**
 * The group to sort the widget by.
 */
export class WidgetGroupSort {
  /**
   * The name of the group.
   */
  "name": string;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;
  /**
   * Set the sort type to group.
   */
  "type": GroupType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GroupType",
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
    return WidgetGroupSort.attributeTypeMap;
  }

  public constructor() {}
}
