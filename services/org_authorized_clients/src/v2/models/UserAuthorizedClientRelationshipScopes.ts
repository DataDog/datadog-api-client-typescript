import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientRelationshipScopeData } from "./UserAuthorizedClientRelationshipScopeData";

/**
 * Relationship to the scopes granted to the OAuth2 client.
 */
export class UserAuthorizedClientRelationshipScopes {
  /**
   * List of scope relationship data objects.
   */
  "data": Array<UserAuthorizedClientRelationshipScopeData>;
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
      type: "Array<UserAuthorizedClientRelationshipScopeData>",
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
    return UserAuthorizedClientRelationshipScopes.attributeTypeMap;
  }

  public constructor() {}
}
