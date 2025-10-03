import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableRowResourceDataAttributes } from "./TableRowResourceDataAttributes";
import { TableRowResourceDataType } from "./TableRowResourceDataType";

/**
 * The definition of `TableRowResourceData` object.
 */
export class TableRowResourceData {
  /**
   * The definition of `TableRowResourceDataAttributes` object.
   */
  "attributes"?: TableRowResourceDataAttributes;
  /**
   * The ID of the row.
   */
  "id"?: string;
  /**
   * Row resource type.
   */
  "type": TableRowResourceDataType;
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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
