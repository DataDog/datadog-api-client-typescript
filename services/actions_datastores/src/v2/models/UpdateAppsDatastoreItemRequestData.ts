import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppsDatastoreItemRequestDataAttributes } from "./UpdateAppsDatastoreItemRequestDataAttributes";
import { UpdateAppsDatastoreItemRequestDataType } from "./UpdateAppsDatastoreItemRequestDataType";

/**
 * The definition of `UpdateAppsDatastoreItemRequestData` object.
 */
export class UpdateAppsDatastoreItemRequestData {
  /**
   * The definition of `UpdateAppsDatastoreItemRequestDataAttributes` object.
   */
  "attributes"?: UpdateAppsDatastoreItemRequestDataAttributes;
  /**
   * The `UpdateAppsDatastoreItemRequestData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": UpdateAppsDatastoreItemRequestDataType;
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
      type: "UpdateAppsDatastoreItemRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UpdateAppsDatastoreItemRequestDataType",
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
    return UpdateAppsDatastoreItemRequestData.attributeTypeMap;
  }

  public constructor() {}
}
