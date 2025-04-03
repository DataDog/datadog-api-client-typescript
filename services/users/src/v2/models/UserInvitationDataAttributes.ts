import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of a user invitation.
 */
export class UserInvitationDataAttributes {
  /**
   * Creation time of the user invitation.
   */
  "createdAt"?: Date;
  /**
   * Time of invitation expiration.
   */
  "expiresAt"?: Date;
  /**
   * Type of invitation.
   */
  "inviteType"?: string;
  /**
   * UUID of the user invitation.
   */
  "uuid"?: string;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    inviteType: {
      baseName: "invite_type",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
      type: "string",
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
    return UserInvitationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
