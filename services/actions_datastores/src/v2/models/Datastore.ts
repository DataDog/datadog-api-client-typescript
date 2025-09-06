import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreData } from "./DatastoreData";

/**
 * A datastore's complete configuration and metadata.
 */
export class Datastore {
  /**
   * Core information about a datastore, including its unique identifier and attributes.
   */
  "data"?: DatastoreData;
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
      type: "DatastoreData",
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
    return Datastore.attributeTypeMap;
  }

  public constructor() {}
}
