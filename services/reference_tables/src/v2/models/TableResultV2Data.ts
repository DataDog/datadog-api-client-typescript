import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableResultV2DataAttributes } from "./TableResultV2DataAttributes";
import { TableResultV2DataType } from "./TableResultV2DataType";

/**
 * The definition of `TableResultV2Data` object.
 */
export class TableResultV2Data {
  /**
   * The definition of `TableResultV2DataAttributes` object.
   */
  "attributes"?: TableResultV2DataAttributes;
  /**
   * The ID of the reference table.
   */
  "id"?: string;
  /**
   * Reference table resource type.
   */
  "type": TableResultV2DataType;
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
      type: "TableResultV2DataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "TableResultV2DataType",
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
    return TableResultV2Data.attributeTypeMap;
  }

  public constructor() {}
}
