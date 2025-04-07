import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetSort } from "./WidgetSort";

/**
 * Which column and order to sort by
 */
export class WidgetFieldSort {
  /**
   * Facet path for the column
   */
  "column": string;
  /**
   * Widget sorting methods.
   */
  "order": WidgetSort;
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
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
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
    return WidgetFieldSort.attributeTypeMap;
  }

  public constructor() {}
}
