import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreData } from "./DatastoreData";

/**
 * A collection of datastores returned by list operations.
 */
export class DatastoreArray {
  /**
   * An array of datastore objects containing their configurations and metadata.
   */
  "data": Array<DatastoreData>;
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
      type: "Array<DatastoreData>",
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
    return DatastoreArray.attributeTypeMap;
  }

  public constructor() {}
}
