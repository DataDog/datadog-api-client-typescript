import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes of the shared dashboard invitation
 */
export class SharedDashboardInvitesDataObjectAttributes {
  /**
   * When the invitation was sent.
   */
  "createdAt"?: Date;
  /**
   * An email address that an invitation has been (or if used in invitation request, will be) sent to.
   */
  "email"?: string;
  /**
   * Indicates whether an active session exists for the invitation (produced when a user clicks the link in the email).
   */
  "hasSession"?: boolean;
  /**
   * When the invitation expires.
   */
  "invitationExpiry"?: Date;
  /**
   * When the invited user's session expires. null if the invitation has no associated session.
   */
  "sessionExpiry"?: Date;
  /**
   * The unique token of the shared dashboard that was (or is to be) shared.
   */
  "shareToken"?: string;
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
    email: {
      baseName: "email",
      type: "string",
    },
    hasSession: {
      baseName: "has_session",
      type: "boolean",
    },
    invitationExpiry: {
      baseName: "invitation_expiry",
      type: "Date",
      format: "date-time",
    },
    sessionExpiry: {
      baseName: "session_expiry",
      type: "Date",
      format: "date-time",
    },
    shareToken: {
      baseName: "share_token",
      type: "string",
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
    return SharedDashboardInvitesDataObjectAttributes.attributeTypeMap;
  }

  public constructor() {}
}
