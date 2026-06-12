import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GoogleChatOrganizationRelationshipsDelegatedUser } from "./GoogleChatOrganizationRelationshipsDelegatedUser";

/**
 * Google Chat organization relationships.
 */
export class GoogleChatOrganizationRelationships {
  /**
   * The delegated user relationship.
   */
  "delegatedUser"?: GoogleChatOrganizationRelationshipsDelegatedUser;
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
    delegatedUser: {
      baseName: "delegated_user",
      type: "GoogleChatOrganizationRelationshipsDelegatedUser",
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
    return GoogleChatOrganizationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
