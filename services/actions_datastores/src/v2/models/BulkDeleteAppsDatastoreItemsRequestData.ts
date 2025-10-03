import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkDeleteAppsDatastoreItemsRequestDataAttributes } from "./BulkDeleteAppsDatastoreItemsRequestDataAttributes";
import { BulkDeleteAppsDatastoreItemsRequestDataType } from "./BulkDeleteAppsDatastoreItemsRequestDataType";

/**
 * Data wrapper containing the data needed to delete items from a datastore.
 */
export class BulkDeleteAppsDatastoreItemsRequestData {
  /**
   * Attributes of request data to delete items from a datastore.
   */
  "attributes"?: BulkDeleteAppsDatastoreItemsRequestDataAttributes;
  /**
   * ID for the datastore of the items to delete.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": BulkDeleteAppsDatastoreItemsRequestDataType;
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
      type: "BulkDeleteAppsDatastoreItemsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "BulkDeleteAppsDatastoreItemsRequestDataType",
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
    return BulkDeleteAppsDatastoreItemsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
