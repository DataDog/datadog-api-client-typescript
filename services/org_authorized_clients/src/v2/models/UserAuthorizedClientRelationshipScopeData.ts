import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientRelationshipScopeDataType } from "./UserAuthorizedClientRelationshipScopeDataType";

/**
 * Data identifying a scope granted to the OAuth2 client.
 */
export class UserAuthorizedClientRelationshipScopeData {
  /**
   * The identifier of the scope.
   */
  "id": string;
  /**
   * Scope resource type.
   */
  "type": UserAuthorizedClientRelationshipScopeDataType;
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
      type: "UserAuthorizedClientRelationshipScopeDataType",
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
    return UserAuthorizedClientRelationshipScopeData.attributeTypeMap;
  }

  public constructor() {}
}
