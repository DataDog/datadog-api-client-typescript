import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BulkPutAppsDatastoreItemsRequestDataAttributes } from "./BulkPutAppsDatastoreItemsRequestDataAttributes";
import { BulkPutAppsDatastoreItemsRequestDataType } from "./BulkPutAppsDatastoreItemsRequestDataType";

/**
 * The definition of `BulkPutAppsDatastoreItemsRequestData` object.
 */
export class BulkPutAppsDatastoreItemsRequestData {
  /**
   * The definition of `BulkPutAppsDatastoreItemsRequestDataAttributes` object.
   */
  "attributes"?: BulkPutAppsDatastoreItemsRequestDataAttributes;
  /**
   * The `BulkPutAppsDatastoreItemsRequestData` `id`.
   */
  "id"?: string;
  /**
   * Items resource type.
   */
  "type": BulkPutAppsDatastoreItemsRequestDataType;
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
      type: "BulkPutAppsDatastoreItemsRequestDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "BulkPutAppsDatastoreItemsRequestDataType",
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
    return BulkPutAppsDatastoreItemsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
