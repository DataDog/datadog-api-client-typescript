import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateConnectionRequestDataAttributes } from "./CreateConnectionRequestDataAttributes";
import { UpdateConnectionRequestDataType } from "./UpdateConnectionRequestDataType";

/**
 * The data object containing the resource type and attributes for creating a new connection.
 */
export class CreateConnectionRequestData {
  /**
   * Attributes defining the data source connection, including join configuration and custom fields.
   */
  "attributes"?: CreateConnectionRequestDataAttributes;
  /**
   * Unique identifier for the new connection resource.
   */
  "id"?: string;
  /**
   * Connection id resource type.
   */
  "type": UpdateConnectionRequestDataType;
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
      type: "CreateConnectionRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateConnectionRequestDataType",
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
    return CreateConnectionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
