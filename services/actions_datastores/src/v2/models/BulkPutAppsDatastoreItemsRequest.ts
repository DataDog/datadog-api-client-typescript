import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkPutAppsDatastoreItemsRequestData } from "./BulkPutAppsDatastoreItemsRequestData";

/**
 * The definition of `BulkPutAppsDatastoreItemsRequest` object.
 */
export class BulkPutAppsDatastoreItemsRequest {
  /**
   * The definition of `BulkPutAppsDatastoreItemsRequestData` object.
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
