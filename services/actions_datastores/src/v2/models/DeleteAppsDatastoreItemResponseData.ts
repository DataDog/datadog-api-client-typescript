import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreItemResponseDataType } from "./DeleteAppsDatastoreItemResponseDataType";

/**
 * The definition of `DeleteAppsDatastoreItemResponseData` object.
 */
export class DeleteAppsDatastoreItemResponseData {
  /**
   * The `DeleteAppsDatastoreItemResponseData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": DeleteAppsDatastoreItemResponseDataType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeleteAppsDatastoreItemResponseDataType",
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
    return DeleteAppsDatastoreItemResponseData.attributeTypeMap;
  }

  public constructor() {}
}
