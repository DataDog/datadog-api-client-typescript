import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTableRequestDataAttributes } from "./CreateTableRequestDataAttributes";
import { CreateTableRequestDataType } from "./CreateTableRequestDataType";

/**
 * The definition of `CreateTableRequestData` object.
 */
export class CreateTableRequestData {
  /**
   * The definition of `CreateTableRequestDataAttributes` object.
   */
  "attributes"?: CreateTableRequestDataAttributes;
  /**
   * The ID of the reference table.
   */
  "id"?: string;
  /**
   * Reference table resource type.
   */
  "type": CreateTableRequestDataType;
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
      type: "CreateTableRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CreateTableRequestDataType",
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
    return CreateTableRequestData.attributeTypeMap;
  }

  public constructor() {}
}
