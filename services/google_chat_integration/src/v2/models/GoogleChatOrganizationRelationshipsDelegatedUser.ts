import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationRelationshipsDelegatedUserData } from "./GoogleChatOrganizationRelationshipsDelegatedUserData";

/**
 * The delegated user relationship.
 */
export class GoogleChatOrganizationRelationshipsDelegatedUser {
  /**
   * Delegated user relationship data.
   */
  "data"?: GoogleChatOrganizationRelationshipsDelegatedUserData;
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
      type: "GoogleChatOrganizationRelationshipsDelegatedUserData",
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
    return GoogleChatOrganizationRelationshipsDelegatedUser.attributeTypeMap;
  }

  public constructor() {}
}
