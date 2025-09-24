import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreDataType } from "./DatastoreDataType";

/**
 * The newly created datastore's data.
 */
export class CreateAppsDatastoreResponseData {
  /**
   * The unique identifier assigned to the newly created datastore.
   */
  "id"?: string;
  /**
   * The resource type for datastores.
   */
  "type": DatastoreDataType;
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
      type: "DatastoreDataType",
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
