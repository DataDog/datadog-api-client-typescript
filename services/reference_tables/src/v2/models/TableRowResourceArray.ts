import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowResourceArrayMeta } from "./TableRowResourceArrayMeta";
import { TableRowResourceData } from "./TableRowResourceData";

/**
 * List of rows from a reference table query, along with metadata about rows that were requested but not found.
 */
export class TableRowResourceArray {
  /**
   * The rows.
   */
  "data": Array<TableRowResourceData>;
  /**
   * Metadata about the rows requested, including which ones were not found.
   */
  "meta"?: TableRowResourceArrayMeta;
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
    meta: {
      baseName: "meta",
      type: "TableRowResourceArrayMeta",
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
