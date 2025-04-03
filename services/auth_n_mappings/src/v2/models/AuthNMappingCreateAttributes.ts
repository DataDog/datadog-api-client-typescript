import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Key/Value pair of attributes used for create request.
 */
export class AuthNMappingCreateAttributes {
  /**
   * Key portion of a key/value pair of the attribute sent from the Identity Provider.
   */
  "attributeKey"?: string;
  /**
   * Value portion of a key/value pair of the attribute sent from the Identity Provider.
   */
  "attributeValue"?: string;
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
    attributeKey: {
      baseName: "attribute_key",
      type: "string",
    },
    attributeValue: {
      baseName: "attribute_value",
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
    return AuthNMappingCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
