import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserInvitationRelationships } from "./UserInvitationRelationships";
import { UserInvitationsType } from "./UserInvitationsType";

/**
 * Object to create a user invitation.
 */
export class UserInvitationData {
  /**
   * Relationships data for user invitation.
   */
  "relationships": UserInvitationRelationships;
  /**
   * User invitations type.
   */
  "type": UserInvitationsType;
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
    relationships: {
      baseName: "relationships",
      type: "UserInvitationRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserInvitationsType",
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
    return UserInvitationData.attributeTypeMap;
  }

  public constructor() {}
}
