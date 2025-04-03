import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToSAMLAssertionAttributeData } from "./RelationshipToSAMLAssertionAttributeData";

/**
 * AuthN Mapping relationship to SAML Assertion Attribute.
 */
export class RelationshipToSAMLAssertionAttribute {
  /**
   * Data of AuthN Mapping relationship to SAML Assertion Attribute.
   */
  "data": RelationshipToSAMLAssertionAttributeData;
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
    data: {
      baseName: "data",
      type: "RelationshipToSAMLAssertionAttributeData",
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
    return RelationshipToSAMLAssertionAttribute.attributeTypeMap;
  }

  public constructor() {}
}
