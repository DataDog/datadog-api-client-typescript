import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowResourceIdentifier } from "./TableRowResourceIdentifier";

/**
 * The request body for deleting multiple rows from a reference table.
 */
export class BatchDeleteRowsRequestArray {
  /**
   * List of row resources to delete from the reference table.
   */
  "data": Array<TableRowResourceIdentifier>;
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
      type: "Array<TableRowResourceIdentifier>",
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
    return BatchDeleteRowsRequestArray.attributeTypeMap;
  }

  public constructor() {}
}
