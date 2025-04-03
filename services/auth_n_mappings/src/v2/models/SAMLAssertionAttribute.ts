import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SAMLAssertionAttributeAttributes } from "./SAMLAssertionAttributeAttributes";
import { SAMLAssertionAttributesType } from "./SAMLAssertionAttributesType";

/**
 * SAML assertion attribute.
 */
export class SAMLAssertionAttribute {
  /**
   * Key/Value pair of attributes used in SAML assertion attributes.
   */
  "attributes"?: SAMLAssertionAttributeAttributes;
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
    attributes: {
      baseName: "attributes",
      type: "SAMLAssertionAttributeAttributes",
    },
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
    return SAMLAssertionAttribute.attributeTypeMap;
  }

  public constructor() {}
}
