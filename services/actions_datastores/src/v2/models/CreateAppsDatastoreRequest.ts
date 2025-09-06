import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreRequestData } from "./CreateAppsDatastoreRequestData";

/**
 * Request to create a new datastore with specified configuration and metadata.
 */
export class CreateAppsDatastoreRequest {
  /**
   * Data wrapper containing the configuration needed to create a new datastore.
   */
  "data"?: CreateAppsDatastoreRequestData;
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
      type: "CreateAppsDatastoreRequestData",
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
    return CreateAppsDatastoreRequest.attributeTypeMap;
  }

  public constructor() {}
}
