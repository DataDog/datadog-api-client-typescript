import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Represent validation endpoint responses.
 */
export class AuthenticationValidationResponse {
  /**
   * Return `true` if the authentication response is valid.
   */
  "valid"?: boolean;
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
    valid: {
      baseName: "valid",
      type: "boolean",
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
    return AuthenticationValidationResponse.attributeTypeMap;
  }

  public constructor() {}
}
