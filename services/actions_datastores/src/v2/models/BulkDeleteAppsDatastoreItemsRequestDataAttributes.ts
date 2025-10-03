import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of request data to delete items from a datastore.
 */
export class BulkDeleteAppsDatastoreItemsRequestDataAttributes {
  /**
   * List of primary keys identifying items to delete from datastore. Up to 100 items can be deleted in a single request.
   */
  "itemKeys"?: Array<string>;
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
    itemKeys: {
      baseName: "item_keys",
      type: "Array<string>",
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
    return BulkDeleteAppsDatastoreItemsRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
