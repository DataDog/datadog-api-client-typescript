import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserRelationshipIdentityProviderDataType } from "./UserRelationshipIdentityProviderDataType";

/**
 * Resource identifier for an identity provider in a relationship update.
 */
export class UserRelationshipIdentityProviderData {
  /**
   * The unique identifier of the identity provider.
   */
  "id": string;
  /**
   * The resource type for identity providers.
   */
  "type": UserRelationshipIdentityProviderDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserRelationshipIdentityProviderDataType",
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
    return UserRelationshipIdentityProviderData.attributeTypeMap;
  }

  public constructor() {}
}
