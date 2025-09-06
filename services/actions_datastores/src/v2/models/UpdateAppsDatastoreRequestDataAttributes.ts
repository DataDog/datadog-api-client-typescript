import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes that can be updated on a datastore.
 */
export class UpdateAppsDatastoreRequestDataAttributes {
  /**
   * A human-readable description about the datastore.
   */
  "description"?: string;
  /**
   * The display name of the datastore.
   */
  "name"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return UpdateAppsDatastoreRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
