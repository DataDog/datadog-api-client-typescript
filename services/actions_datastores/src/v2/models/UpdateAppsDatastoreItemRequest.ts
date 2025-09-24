import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppsDatastoreItemRequestData } from "./UpdateAppsDatastoreItemRequestData";

/**
 * Request to update specific fields on an existing datastore item.
 */
export class UpdateAppsDatastoreItemRequest {
  /**
   * Data wrapper containing the item identifier and the changes to apply during the update operation.
   */
  "data"?: UpdateAppsDatastoreItemRequestData;
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
      type: "UpdateAppsDatastoreItemRequestData",
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
    return UpdateAppsDatastoreItemRequest.attributeTypeMap;
  }

  public constructor() {}
}
