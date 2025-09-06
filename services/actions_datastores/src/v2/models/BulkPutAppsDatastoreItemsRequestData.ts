import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkPutAppsDatastoreItemsRequestDataAttributes } from "./BulkPutAppsDatastoreItemsRequestDataAttributes";
import { DatastoreItemsDataType } from "./DatastoreItemsDataType";

/**
 * Data wrapper containing the items to insert and their configuration for the bulk insert operation.
 */
export class BulkPutAppsDatastoreItemsRequestData {
  /**
   * Configuration for bulk inserting multiple items into a datastore.
   */
  "attributes"?: BulkPutAppsDatastoreItemsRequestDataAttributes;
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
      type: "BulkPutAppsDatastoreItemsRequestDataAttributes",
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
    return BulkPutAppsDatastoreItemsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
