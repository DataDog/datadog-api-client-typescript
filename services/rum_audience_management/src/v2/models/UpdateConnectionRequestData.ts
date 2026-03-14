import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateConnectionRequestDataAttributes } from "./UpdateConnectionRequestDataAttributes";
import { UpdateConnectionRequestDataType } from "./UpdateConnectionRequestDataType";

/**
 * The data object containing the resource identifier and attributes for updating an existing connection.
 */
export class UpdateConnectionRequestData {
  /**
   * Attributes specifying the field modifications to apply to an existing connection.
   */
  "attributes"?: UpdateConnectionRequestDataAttributes;
  /**
   * The unique identifier of the connection to update.
   */
  "id": string;
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
      type: "UpdateConnectionRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
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
    return UpdateConnectionRequestData.attributeTypeMap;
  }

  public constructor() {}
}
