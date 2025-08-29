import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The definition of `CreateAppsDatastoreFromImportResponseDataAttributes` object.
 */
export class CreateAppsDatastoreFromImportResponseDataAttributes {
  /**
   * The `attributes` `item_count`.
   */
  "itemCount"?: number;
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
    itemCount: {
      baseName: "item_count",
      type: "number",
      format: "int64",
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
    return CreateAppsDatastoreFromImportResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
