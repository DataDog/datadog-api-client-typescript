import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateAppsDatastoreItemRequestDataAttributesItemChanges } from "./UpdateAppsDatastoreItemRequestDataAttributesItemChanges";

/**
 * The definition of `UpdateAppsDatastoreItemRequestDataAttributes` object.
 */
export class UpdateAppsDatastoreItemRequestDataAttributes {
  /**
   * The definition of `UpdateAppsDatastoreItemRequestDataAttributesItemChanges` object.
   */
  "itemChanges": UpdateAppsDatastoreItemRequestDataAttributesItemChanges;
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
    itemChanges: {
      baseName: "item_changes",
      type: "UpdateAppsDatastoreItemRequestDataAttributesItemChanges",
      required: true,
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
    return UpdateAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
