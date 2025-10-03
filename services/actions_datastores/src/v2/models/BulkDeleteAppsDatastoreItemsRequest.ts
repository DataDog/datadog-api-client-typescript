import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkDeleteAppsDatastoreItemsRequestData } from "./BulkDeleteAppsDatastoreItemsRequestData";

/**
 * Request to delete items from a datastore.
 */
export class BulkDeleteAppsDatastoreItemsRequest {
  /**
   * Data wrapper containing the data needed to delete items from a datastore.
   */
  "data"?: BulkDeleteAppsDatastoreItemsRequestData;
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
    data: {
      baseName: "data",
      type: "BulkDeleteAppsDatastoreItemsRequestData",
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
    return BulkDeleteAppsDatastoreItemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
