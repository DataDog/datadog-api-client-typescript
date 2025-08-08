import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `UpdateAppsDatastoreItemRequestDataAttributesItemChanges` object.
 */
export class UpdateAppsDatastoreItemRequestDataAttributesItemChanges {
  /**
   * The `item_changes` `$set`.
   */
  "set"?: { [key: string]: any };
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
    set: {
      baseName: "$set",
      type: "{ [key: string]: any; }",
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
    return UpdateAppsDatastoreItemRequestDataAttributesItemChanges.attributeTypeMap;
  }

  public constructor() {}
}
