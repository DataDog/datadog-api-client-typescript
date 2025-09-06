import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreDataAttributes } from "./DatastoreDataAttributes";
import { DatastoreDataType } from "./DatastoreDataType";

/**
 * Core information about a datastore, including its unique identifier and attributes.
 */
export class DatastoreData {
  /**
   * Detailed information about a datastore.
   */
  "attributes"?: DatastoreDataAttributes;
  /**
   * The unique identifier of the datastore.
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
      type: "DatastoreDataAttributes",
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
    return DatastoreData.attributeTypeMap;
  }

  public constructor() {}
}
