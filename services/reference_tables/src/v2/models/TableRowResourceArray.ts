import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowResourceData } from "./TableRowResourceData";

/**
 * The definition of `TableRowResourceArray` object.
 */
export class TableRowResourceArray {
  /**
   * The rows.
   */
  "data": Array<TableRowResourceData>;
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
    data: {
      baseName: "data",
      type: "Array<TableRowResourceData>",
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
    return TableRowResourceArray.attributeTypeMap;
  }

  public constructor() {}
}
