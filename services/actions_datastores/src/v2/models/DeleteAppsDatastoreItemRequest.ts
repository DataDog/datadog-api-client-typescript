import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreItemRequestData } from "./DeleteAppsDatastoreItemRequestData";

/**
 * Request to delete a specific item from a datastore by its primary key.
 */
export class DeleteAppsDatastoreItemRequest {
  /**
   * Data wrapper containing the information needed to identify and delete a specific datastore item.
   */
  "data"?: DeleteAppsDatastoreItemRequestData;
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
      type: "DeleteAppsDatastoreItemRequestData",
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
    return DeleteAppsDatastoreItemRequest.attributeTypeMap;
  }

  public constructor() {}
}
