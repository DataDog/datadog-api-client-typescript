import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableResultV2DataAttributes } from "./TableResultV2DataAttributes";
import { TableResultV2DataType } from "./TableResultV2DataType";

/**
 * The data object containing the reference table configuration and state.
 */
export class TableResultV2Data {
  /**
   * Attributes that define the reference table's configuration and properties.
   */
  "attributes"?: TableResultV2DataAttributes;
  /**
   * Unique identifier for the reference table.
   */
  "id"?: string;
  /**
   * Reference table resource type.
   */
  "type": TableResultV2DataType;
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableResultV2Data.attributeTypeMap;
  }

  public constructor() {}
}
