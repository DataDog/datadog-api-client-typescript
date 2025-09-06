import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Changes to apply to a datastore item using set operations.
 */
export class UpdateAppsDatastoreItemRequestDataAttributesItemChanges {
  /**
   * Set operation that contains key-value pairs to set on the datastore item.
   */
  "opsSet"?: { [key: string]: any };
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
    opsSet: {
      baseName: "ops_set",
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
