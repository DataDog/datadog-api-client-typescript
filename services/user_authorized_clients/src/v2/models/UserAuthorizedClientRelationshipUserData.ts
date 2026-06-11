import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientRelationshipUserDataType } from "./UserAuthorizedClientRelationshipUserDataType";

/**
 * Data identifying the user who granted this authorization.
 */
export class UserAuthorizedClientRelationshipUserData {
  /**
   * The ID of the user.
   */
  "id": string;
  /**
   * User resource type.
   */
  "type": UserAuthorizedClientRelationshipUserDataType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserAuthorizedClientRelationshipUserDataType",
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
    return UserAuthorizedClientRelationshipUserData.attributeTypeMap;
  }

  public constructor() {}
}
