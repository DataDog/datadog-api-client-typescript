import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreData } from "./DatastoreData";

/**
 * The definition of `DatastoreArray` object.
 */
export class DatastoreArray {
  /**
   * The `DatastoreArray` `data`.
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
