import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreResponseDataType } from "./CreateAppsDatastoreResponseDataType";

/**
 * The definition of `CreateAppsDatastoreResponseData` object.
 */
export class CreateAppsDatastoreResponseData {
  /**
   * The `CreateAppsDatastoreResponseData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": CreateAppsDatastoreResponseDataType;
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
      type: "CreateAppsDatastoreResponseDataType",
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
    return CreateAppsDatastoreResponseData.attributeTypeMap;
  }

  public constructor() {}
}
