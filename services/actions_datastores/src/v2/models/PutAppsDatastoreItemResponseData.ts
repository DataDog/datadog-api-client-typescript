import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreItemsDataType } from "./DatastoreItemsDataType";

/**
 * Data containing the identifier of a single item that was successfully inserted into the datastore.
 */
export class PutAppsDatastoreItemResponseData {
  /**
   * The unique identifier assigned to the inserted item.
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
    return PutAppsDatastoreItemResponseData.attributeTypeMap;
  }

  public constructor() {}
}
