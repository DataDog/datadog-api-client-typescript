import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreRequestDataAttributes } from "./CreateAppsDatastoreRequestDataAttributes";
import { DatastoreDataType } from "./DatastoreDataType";

/**
 * Data wrapper containing the configuration needed to create a new datastore.
 */
export class CreateAppsDatastoreRequestData {
  /**
   * Configuration and metadata to create a new datastore.
   */
  "attributes"?: CreateAppsDatastoreRequestDataAttributes;
  /**
   * Optional ID for the new datastore. If not provided, one will be generated automatically.
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
      type: "CreateAppsDatastoreRequestDataAttributes",
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
    return CreateAppsDatastoreRequestData.attributeTypeMap;
  }

  public constructor() {}
}
