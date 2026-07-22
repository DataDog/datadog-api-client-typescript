import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientRelationshipOAuth2Client } from "./UserAuthorizedClientRelationshipOAuth2Client";
import { UserAuthorizedClientRelationshipScopes } from "./UserAuthorizedClientRelationshipScopes";
import { UserAuthorizedClientRelationshipUser } from "./UserAuthorizedClientRelationshipUser";

/**
 * Relationships for a user authorized client.
 */
export class UserAuthorizedClientRelationships {
  /**
   * Relationship to the OAuth2 client that was authorized.
   */
  "oauth2Client": UserAuthorizedClientRelationshipOAuth2Client;
  /**
   * Relationship to the scopes granted to the OAuth2 client.
   */
  "scopes": UserAuthorizedClientRelationshipScopes;
  /**
   * Relationship to the user who granted this authorization.
   */
  "user": UserAuthorizedClientRelationshipUser;
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
    oauth2Client: {
      baseName: "oauth2_client",
      type: "UserAuthorizedClientRelationshipOAuth2Client",
      required: true,
    },
    scopes: {
      baseName: "scopes",
      type: "UserAuthorizedClientRelationshipScopes",
      required: true,
    },
    user: {
      baseName: "user",
      type: "UserAuthorizedClientRelationshipUser",
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
    return UserAuthorizedClientRelationships.attributeTypeMap;
  }

  public constructor() {}
}
