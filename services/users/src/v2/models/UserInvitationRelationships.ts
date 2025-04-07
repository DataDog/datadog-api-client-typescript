import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUser } from "./RelationshipToUser";

/**
 * Relationships data for user invitation.
 */
export class UserInvitationRelationships {
  /**
   * Relationship to user.
   */
  "user": RelationshipToUser;
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
    user: {
      baseName: "user",
      type: "RelationshipToUser",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserInvitationRelationships.attributeTypeMap;
  }

  public constructor() {}
}
