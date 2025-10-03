import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreItemResponseData } from "./DeleteAppsDatastoreItemResponseData";

/**
 * The definition of `DeleteAppsDatastoreItemResponseArray` object.
 */
export class DeleteAppsDatastoreItemResponseArray {
  /**
   * The `DeleteAppsDatastoreItemResponseArray` `data`.
   */
  "data": Array<DeleteAppsDatastoreItemResponseData>;
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
      type: "Array<DeleteAppsDatastoreItemResponseData>",
      required: true,
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
    return DeleteAppsDatastoreItemResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
