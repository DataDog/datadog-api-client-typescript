import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PutAppsDatastoreItemResponseData } from "./PutAppsDatastoreItemResponseData";

/**
 * The definition of `PutAppsDatastoreItemResponseArray` object.
 */
export class PutAppsDatastoreItemResponseArray {
  /**
   * The `PutAppsDatastoreItemResponseArray` `data`.
   */
  "data": Array<PutAppsDatastoreItemResponseData>;
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
      type: "Array<PutAppsDatastoreItemResponseData>",
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
    return PutAppsDatastoreItemResponseArray.attributeTypeMap;
  }

  public constructor() {}
}
