import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreItemsDataType } from "./DatastoreItemsDataType";
import { DeleteAppsDatastoreItemRequestDataAttributes } from "./DeleteAppsDatastoreItemRequestDataAttributes";

/**
 * Data wrapper containing the information needed to identify and delete a specific datastore item.
 */
export class DeleteAppsDatastoreItemRequestData {
  /**
   * Attributes specifying which datastore item to delete by its primary key.
   */
  "attributes"?: DeleteAppsDatastoreItemRequestDataAttributes;
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
    attributes: {
      baseName: "attributes",
      type: "DeleteAppsDatastoreItemRequestDataAttributes",
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
    return DeleteAppsDatastoreItemRequestData.attributeTypeMap;
  }

  public constructor() {}
}
