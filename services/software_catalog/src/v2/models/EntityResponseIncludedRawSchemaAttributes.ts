import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Included raw schema attributes.
 */
export class EntityResponseIncludedRawSchemaAttributes {
  /**
   * Schema from user input in base64 encoding.
   */
  "rawSchema"?: string;
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
    rawSchema: {
      baseName: "rawSchema",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityResponseIncludedRawSchemaAttributes.attributeTypeMap;
  }

  public constructor() {}
}
