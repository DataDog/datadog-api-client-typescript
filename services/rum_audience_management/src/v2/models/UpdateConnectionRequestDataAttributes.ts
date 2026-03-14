import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";
import { UpdateConnectionRequestDataAttributesFieldsToUpdateItems } from "./UpdateConnectionRequestDataAttributesFieldsToUpdateItems";

/**
 * Attributes specifying the field modifications to apply to an existing connection.
 */
export class UpdateConnectionRequestDataAttributes {
  /**
   * New fields to add to the connection from the data source.
   */
  "fieldsToAdd"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  /**
   * Identifiers of existing fields to remove from the connection.
   */
  "fieldsToDelete"?: Array<string>;
  /**
   * Existing fields with updated metadata to apply to the connection.
   */
  "fieldsToUpdate"?: Array<UpdateConnectionRequestDataAttributesFieldsToUpdateItems>;
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
    fieldsToAdd: {
      baseName: "fields_to_add",
      type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    fieldsToDelete: {
      baseName: "fields_to_delete",
      type: "Array<string>",
    },
    fieldsToUpdate: {
      baseName: "fields_to_update",
      type: "Array<UpdateConnectionRequestDataAttributesFieldsToUpdateItems>",
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
    return UpdateConnectionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
