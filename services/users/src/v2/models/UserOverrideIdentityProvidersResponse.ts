import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserOverrideIdentityProviderData } from "./UserOverrideIdentityProviderData";

/**
 * Response containing a user's identity provider overrides.
 */
export class UserOverrideIdentityProvidersResponse {
  /**
   * List of user identity provider override data objects.
   */
  "data": Array<UserOverrideIdentityProviderData>;
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
    data: {
      baseName: "data",
      type: "Array<UserOverrideIdentityProviderData>",
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
    return UserOverrideIdentityProvidersResponse.attributeTypeMap;
  }

  public constructor() {}
}
