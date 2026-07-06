import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserOverrideIdentityProviderAttributes } from "./UserOverrideIdentityProviderAttributes";
import { UserOverrideIdentityProviderDataType } from "./UserOverrideIdentityProviderDataType";

/**
 * Data object representing a user identity provider override.
 */
export class UserOverrideIdentityProviderData {
  /**
   * Attributes of an identity provider override for a user.
   */
  "attributes": UserOverrideIdentityProviderAttributes;
  /**
   * The unique identifier of the identity provider.
   */
  "id": string;
  /**
   * The resource type for identity providers.
   */
  "type": UserOverrideIdentityProviderDataType;
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
      type: "UserOverrideIdentityProviderAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserOverrideIdentityProviderDataType",
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
    return UserOverrideIdentityProviderData.attributeTypeMap;
  }

  public constructor() {}
}
