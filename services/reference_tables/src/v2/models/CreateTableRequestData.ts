import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributes } from "./CreateTableRequestDataAttributes";
import { CreateTableRequestDataType } from "./CreateTableRequestDataType";

/**
 * The data object containing the table definition.
 */
export class CreateTableRequestData {
  /**
   * Attributes that define the reference table's configuration and properties.
   */
  "attributes"?: CreateTableRequestDataAttributes;
  /**
   * Reference table resource type.
   */
  "type": CreateTableRequestDataType;
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
      type: "CreateTableRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "CreateTableRequestDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateTableRequestData.attributeTypeMap;
  }

  public constructor() {}
}
