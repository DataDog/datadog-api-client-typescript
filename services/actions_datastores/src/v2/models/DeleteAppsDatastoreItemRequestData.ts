import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeleteAppsDatastoreItemRequestDataAttributes } from "./DeleteAppsDatastoreItemRequestDataAttributes";
import { DeleteAppsDatastoreItemRequestDataType } from "./DeleteAppsDatastoreItemRequestDataType";

/**
 * The definition of `DeleteAppsDatastoreItemRequestData` object.
 */
export class DeleteAppsDatastoreItemRequestData {
  /**
   * The definition of `DeleteAppsDatastoreItemRequestDataAttributes` object.
   */
  "attributes"?: DeleteAppsDatastoreItemRequestDataAttributes;
  /**
   * The `DeleteAppsDatastoreItemRequestData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": DeleteAppsDatastoreItemRequestDataType;
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
      type: "DeleteAppsDatastoreItemRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "DeleteAppsDatastoreItemRequestDataType",
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
    return DeleteAppsDatastoreItemRequestData.attributeTypeMap;
  }

  public constructor() {}
}
