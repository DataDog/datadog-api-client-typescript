import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreDataType } from "./DatastoreDataType";
import { UpdateAppsDatastoreRequestDataAttributes } from "./UpdateAppsDatastoreRequestDataAttributes";

/**
 * Data wrapper containing the datastore identifier and the attributes to update.
 */
export class UpdateAppsDatastoreRequestData {
  /**
   * Attributes that can be updated on a datastore.
   */
  "attributes"?: UpdateAppsDatastoreRequestDataAttributes;
  /**
   * The unique identifier of the datastore to update.
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
    attributes: {
      baseName: "attributes",
      type: "UpdateAppsDatastoreRequestDataAttributes",
    },
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
    return UpdateAppsDatastoreRequestData.attributeTypeMap;
  }

  public constructor() {}
}
