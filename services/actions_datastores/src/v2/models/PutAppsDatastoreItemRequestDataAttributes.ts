import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `PutAppsDatastoreItemRequestDataAttributes` object.
 */
export class PutAppsDatastoreItemRequestDataAttributes {
  /**
   * The `attributes` `value`.
   */
  "value": { [key: string]: any };
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
    value: {
      baseName: "value",
      type: "{ [key: string]: any; }",
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
    return PutAppsDatastoreItemRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
