import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreResponseData } from "./CreateAppsDatastoreResponseData";

/**
 * The definition of `CreateAppsDatastoreResponse` object.
 */
export class CreateAppsDatastoreResponse {
  /**
   * The definition of `CreateAppsDatastoreResponseData` object.
   */
  "data"?: CreateAppsDatastoreResponseData;
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
      type: "CreateAppsDatastoreResponseData",
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
    return CreateAppsDatastoreResponse.attributeTypeMap;
  }

  public constructor() {}
}
