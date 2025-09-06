import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppsDatastoreRequestData } from "./UpdateAppsDatastoreRequestData";

/**
 * Request to update a datastore's configuration such as its name or description.
 */
export class UpdateAppsDatastoreRequest {
  /**
   * Data wrapper containing the datastore identifier and the attributes to update.
   */
  "data"?: UpdateAppsDatastoreRequestData;
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
      type: "UpdateAppsDatastoreRequestData",
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
    return UpdateAppsDatastoreRequest.attributeTypeMap;
  }

  public constructor() {}
}
