import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreResponseDataType } from "./DeleteAppsDatastoreResponseDataType";

/**
 * The definition of `DeleteAppsDatastoreResponseData` object.
 */
export class DeleteAppsDatastoreResponseData {
  /**
   * The `DeleteAppsDatastoreResponseData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": DeleteAppsDatastoreResponseDataType;
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
      type: "DeleteAppsDatastoreResponseDataType",
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
    return DeleteAppsDatastoreResponseData.attributeTypeMap;
  }

  public constructor() {}
}
