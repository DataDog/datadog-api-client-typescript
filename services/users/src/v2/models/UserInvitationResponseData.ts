import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserInvitationDataAttributes } from "./UserInvitationDataAttributes";
import { UserInvitationRelationships } from "./UserInvitationRelationships";
import { UserInvitationsType } from "./UserInvitationsType";

/**
 * Object of a user invitation returned by the API.
 */
export class UserInvitationResponseData {
  /**
   * Attributes of a user invitation.
   */
  "attributes"?: UserInvitationDataAttributes;
  /**
   * ID of the user invitation.
   */
  "id"?: string;
  /**
   * Relationships data for user invitation.
   */
  "relationships"?: UserInvitationRelationships;
  /**
   * User invitations type.
   */
  "type"?: UserInvitationsType;
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
    attributes: {
      baseName: "attributes",
      type: "UserInvitationDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "UserInvitationRelationships",
    },
    type: {
      baseName: "type",
      type: "UserInvitationsType",
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
    return UserInvitationResponseData.attributeTypeMap;
  }

  public constructor() {}
}
