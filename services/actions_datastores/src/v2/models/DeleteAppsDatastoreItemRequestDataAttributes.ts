import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `DeleteAppsDatastoreItemRequestDataAttributes` object.
 */
export class DeleteAppsDatastoreItemRequestDataAttributes {
  /**
   * The `item` `id`.
   */
  "id"?: string;
  /**
   * The `attributes` `item_key`.
   */
  "itemKey": string;
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
    id: {
      baseName: "id",
      type: "string",
    },
    itemKey: {
      baseName: "item_key",
      type: "string",
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
    return DeleteAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
