import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PutAppsDatastoreItemRequestDataAttributes } from "./PutAppsDatastoreItemRequestDataAttributes";
import { PutAppsDatastoreItemRequestDataType } from "./PutAppsDatastoreItemRequestDataType";

/**
 * The definition of `PutAppsDatastoreItemRequestData` object.
 */
export class PutAppsDatastoreItemRequestData {
  /**
   * The definition of `PutAppsDatastoreItemRequestDataAttributes` object.
   */
  "attributes"?: PutAppsDatastoreItemRequestDataAttributes;
  /**
   * The `PutAppsDatastoreItemRequestData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": PutAppsDatastoreItemRequestDataType;
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
      type: "PutAppsDatastoreItemRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "PutAppsDatastoreItemRequestDataType",
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
    return PutAppsDatastoreItemRequestData.attributeTypeMap;
  }

  public constructor() {}
}
