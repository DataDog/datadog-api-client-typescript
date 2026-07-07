import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientRelationshipUserData } from "./UserAuthorizedClientRelationshipUserData";

/**
 * Relationship to the user who granted this authorization.
 */
export class UserAuthorizedClientRelationshipUser {
  /**
   * Data identifying the user who granted this authorization.
   */
  "data": UserAuthorizedClientRelationshipUserData;
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
      type: "UserAuthorizedClientRelationshipUserData",
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
    return UserAuthorizedClientRelationshipUser.attributeTypeMap;
  }

  public constructor() {}
}
