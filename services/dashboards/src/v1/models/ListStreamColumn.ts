import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListStreamColumnWidth } from "./ListStreamColumnWidth";

/**
 * Widget column.
 */
export class ListStreamColumn {
  /**
   * Widget column field.
   */
  "field": string;
  /**
   * Widget column width.
   */
  "width": ListStreamColumnWidth;
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
    field: {
      baseName: "field",
      type: "string",
      required: true,
    },
    width: {
      baseName: "width",
      type: "ListStreamColumnWidth",
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
    return ListStreamColumn.attributeTypeMap;
  }

  public constructor() {}
}
