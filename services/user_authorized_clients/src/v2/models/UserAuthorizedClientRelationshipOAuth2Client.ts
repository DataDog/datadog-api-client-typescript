import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientRelationshipOAuth2ClientData } from "./UserAuthorizedClientRelationshipOAuth2ClientData";

/**
 * Relationship to the OAuth2 client that was authorized.
 */
export class UserAuthorizedClientRelationshipOAuth2Client {
  /**
   * Data identifying the OAuth2 client that was authorized.
   */
  "data": UserAuthorizedClientRelationshipOAuth2ClientData;
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
      type: "UserAuthorizedClientRelationshipOAuth2ClientData",
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
    return UserAuthorizedClientRelationshipOAuth2Client.attributeTypeMap;
  }

  public constructor() {}
}
