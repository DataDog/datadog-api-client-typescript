import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes of an identity provider override for a user.
 */
export class UserOverrideIdentityProviderAttributes {
  /**
   * The authentication method used by this identity provider.
   */
  "authenticationMethod": string;
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
    authenticationMethod: {
      baseName: "authentication_method",
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
    return UserOverrideIdentityProviderAttributes.attributeTypeMap;
  }

  public constructor() {}
}
