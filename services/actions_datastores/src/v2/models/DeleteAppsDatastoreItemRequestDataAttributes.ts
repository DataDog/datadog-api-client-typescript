import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes specifying which datastore item to delete by its primary key.
 */
export class DeleteAppsDatastoreItemRequestDataAttributes {
  /**
   * Optional unique identifier of the item to delete.
   */
  "id"?: string;
  /**
   * The primary key value that identifies the item to delete. Cannot exceed 256 characters.
   */
  "itemKey": string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    itemKey: {
      baseName: "item_key",
      type: "string",
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
    return DeleteAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
