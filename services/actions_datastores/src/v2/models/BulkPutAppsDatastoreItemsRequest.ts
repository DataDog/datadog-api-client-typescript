import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkPutAppsDatastoreItemsRequestData } from "./BulkPutAppsDatastoreItemsRequestData";

/**
 * Request to insert multiple items into a datastore in a single operation.
 */
export class BulkPutAppsDatastoreItemsRequest {
  /**
   * Data wrapper containing the items to insert and their configuration for the bulk insert operation.
   */
  "data"?: BulkPutAppsDatastoreItemsRequestData;
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
      type: "BulkPutAppsDatastoreItemsRequestData",
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
    return BulkPutAppsDatastoreItemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
