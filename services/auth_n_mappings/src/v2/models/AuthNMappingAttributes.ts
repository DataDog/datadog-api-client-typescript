import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of AuthN Mapping.
 */
export class AuthNMappingAttributes {
  /**
   * Key portion of a key/value pair of the attribute sent from the Identity Provider.
   */
  "attributeKey"?: string;
  /**
   * Value portion of a key/value pair of the attribute sent from the Identity Provider.
   */
  "attributeValue"?: string;
  /**
   * Creation time of the AuthN Mapping.
   */
  "createdAt"?: Date;
  /**
   * Time of last AuthN Mapping modification.
   */
  "modifiedAt"?: Date;
  /**
   * The ID of the SAML assertion attribute.
   */
  "samlAssertionAttributeId"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    samlAssertionAttributeId: {
      baseName: "saml_assertion_attribute_id",
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
    return AuthNMappingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
