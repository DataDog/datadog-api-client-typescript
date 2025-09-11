import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreItemsDataType } from "./DatastoreItemsDataType";

/**
 * Data containing the identifier of the datastore item that was successfully deleted.
 */
export class DeleteAppsDatastoreItemResponseData {
  /**
   * The unique identifier of the item that was deleted.
   */
  "id"?: string;
  /**
   * The resource type for datastore items.
   */
  "type": DatastoreItemsDataType;
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
    type: {
      baseName: "type",
      type: "DatastoreItemsDataType",
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
    return DeleteAppsDatastoreItemResponseData.attributeTypeMap;
  }

  public constructor() {}
}
