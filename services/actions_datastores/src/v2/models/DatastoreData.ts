import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DatastoreDataAttributes } from "./DatastoreDataAttributes";
import { DatastoreDataType } from "./DatastoreDataType";

/**
 * The definition of `DatastoreData` object.
 */
export class DatastoreData {
  /**
   * The definition of `DatastoreDataAttributes` object.
   */
  "attributes"?: DatastoreDataAttributes;
  /**
   * The `DatastoreData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
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
