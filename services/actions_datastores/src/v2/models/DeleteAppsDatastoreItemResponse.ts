import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreItemResponseData } from "./DeleteAppsDatastoreItemResponseData";

/**
 * Response from successfully deleting a datastore item.
 */
export class DeleteAppsDatastoreItemResponse {
  /**
   * Data containing the identifier of the datastore item that was successfully deleted.
   */
  "data"?: DeleteAppsDatastoreItemResponseData;
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
      type: "DeleteAppsDatastoreItemResponseData",
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
    return DeleteAppsDatastoreItemResponse.attributeTypeMap;
  }

  public constructor() {}
}
