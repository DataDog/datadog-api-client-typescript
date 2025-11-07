import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowResourceDataAttributes } from "./TableRowResourceDataAttributes";
import { TableRowResourceDataType } from "./TableRowResourceDataType";

/**
 * The data object containing the row column names and values.
 */
export class TableRowResourceData {
  /**
   * Column values for this row in the reference table.
   */
  "attributes"?: TableRowResourceDataAttributes;
  /**
   * Row identifier, corresponding to the primary key value.
   */
  "id"?: string;
  /**
   * Row resource type.
   */
  "type": TableRowResourceDataType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "TableRowResourceDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TableRowResourceDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowResourceData.attributeTypeMap;
  }

  public constructor() {}
}
