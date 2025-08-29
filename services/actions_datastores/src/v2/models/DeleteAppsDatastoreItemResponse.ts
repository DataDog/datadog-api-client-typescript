import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreItemResponseData } from "./DeleteAppsDatastoreItemResponseData";

/**
 * The definition of `DeleteAppsDatastoreItemResponse` object.
 */
export class DeleteAppsDatastoreItemResponse {
  /**
   * The definition of `DeleteAppsDatastoreItemResponseData` object.
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
