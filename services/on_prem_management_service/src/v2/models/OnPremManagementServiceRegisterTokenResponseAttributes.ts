import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for the registered token.
 */
export class OnPremManagementServiceRegisterTokenResponseAttributes {
  /**
   * The token string.
   */
  "tokenString": string;
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
    tokenString: {
      baseName: "token_string",
      type: "string",
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
    return OnPremManagementServiceRegisterTokenResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
