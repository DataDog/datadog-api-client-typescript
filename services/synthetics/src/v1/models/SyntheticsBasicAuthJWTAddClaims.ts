import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Standard JWT claims to automatically inject.
 */
export class SyntheticsBasicAuthJWTAddClaims {
  /**
   * Whether to inject the `exp` (expiration) claim.
   */
  "exp"?: boolean;
  /**
   * Whether to inject the `iat` (issued at) claim.
   */
  "iat"?: boolean;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    exp: {
      baseName: "exp",
      type: "boolean",
    },
    iat: {
      baseName: "iat",
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
    return SyntheticsBasicAuthJWTAddClaims.attributeTypeMap;
  }

  public constructor() {}
}
