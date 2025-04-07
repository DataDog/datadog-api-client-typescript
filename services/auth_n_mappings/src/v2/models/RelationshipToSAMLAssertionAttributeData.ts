import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SAMLAssertionAttributesType } from "./SAMLAssertionAttributesType";

/**
 * Data of AuthN Mapping relationship to SAML Assertion Attribute.
 */
export class RelationshipToSAMLAssertionAttributeData {
  /**
   * The ID of the SAML assertion attribute.
   */
  "id": string;
  /**
   * SAML assertion attributes resource type.
   */
  "type": SAMLAssertionAttributesType;
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
      required: true,
    },
    type: {
      baseName: "type",
      type: "SAMLAssertionAttributesType",
      required: true,
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
    return RelationshipToSAMLAssertionAttributeData.attributeTypeMap;
  }

  public constructor() {}
}
