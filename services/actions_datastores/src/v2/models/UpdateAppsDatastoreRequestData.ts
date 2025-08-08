import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppsDatastoreRequestDataAttributes } from "./UpdateAppsDatastoreRequestDataAttributes";
import { UpdateAppsDatastoreRequestDataType } from "./UpdateAppsDatastoreRequestDataType";

/**
 * The definition of `UpdateAppsDatastoreRequestData` object.
 */
export class UpdateAppsDatastoreRequestData {
  /**
   * The definition of `UpdateAppsDatastoreRequestDataAttributes` object.
   */
  "attributes"?: UpdateAppsDatastoreRequestDataAttributes;
  /**
   * The `UpdateAppsDatastoreRequestData` `id`.
   */
  "id"?: string;
  /**
   * Datastores resource type.
   */
  "type": UpdateAppsDatastoreRequestDataType;
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
      type: "UpdateAppsDatastoreRequestDataType",
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
