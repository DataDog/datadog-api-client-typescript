import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatDelegatedUserType } from "./GoogleChatDelegatedUserType";

/**
 * Delegated user relationship data.
 */
export class GoogleChatOrganizationRelationshipsDelegatedUserData {
  /**
   * The ID of the delegated user.
   */
  "id"?: string;
  /**
   * Google Chat delegated user resource type.
   */
  "type"?: GoogleChatDelegatedUserType;
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
    },
    type: {
      baseName: "type",
      type: "GoogleChatDelegatedUserType",
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
    return GoogleChatOrganizationRelationshipsDelegatedUserData.attributeTypeMap;
  }

  public constructor() {}
}
