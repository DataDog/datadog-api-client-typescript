import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PutAppsDatastoreItemRequestData } from "./PutAppsDatastoreItemRequestData";

/**
 * The definition of `PutAppsDatastoreItemRequest` object.
 */
export class PutAppsDatastoreItemRequest {
  /**
   * The definition of `PutAppsDatastoreItemRequestData` object.
   */
  "data"?: PutAppsDatastoreItemRequestData;
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
      type: "PutAppsDatastoreItemRequestData",
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
    return PutAppsDatastoreItemRequest.attributeTypeMap;
  }

  public constructor() {}
}
