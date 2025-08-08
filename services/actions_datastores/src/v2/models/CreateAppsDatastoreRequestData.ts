import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateAppsDatastoreRequestDataAttributes } from "./CreateAppsDatastoreRequestDataAttributes";
import { CreateAppsDatastoreRequestDataType } from "./CreateAppsDatastoreRequestDataType";

/**
 * The definition of `CreateAppsDatastoreRequestData` object.
 */
export class CreateAppsDatastoreRequestData {
  /**
   * The definition of `CreateAppsDatastoreRequestDataAttributes` object.
   */
  "attributes"?: CreateAppsDatastoreRequestDataAttributes;
  /**
   * The `CreateAppsDatastoreRequestData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": CreateAppsDatastoreRequestDataType;
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
      type: "CreateAppsDatastoreRequestDataType",
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
