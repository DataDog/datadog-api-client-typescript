import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The allowlisted invitees for an INVITE-only shared dashboard.
 */
export class SharedDashboardInviteesItems {
  /**
   * Time of the invitee expiration. Null means the invite will not expire.
   */
  "accessExpiration"?: Date;
  /**
   * Time that the invitee was created.
   */
  "createdAt"?: Date;
  /**
   * Email of the invitee.
   */
  "email": string;
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
    accessExpiration: {
      baseName: "access_expiration",
      type: "Date",
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    email: {
      baseName: "email",
      type: "string",
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
    return SharedDashboardInviteesItems.attributeTypeMap;
  }

  public constructor() {}
}
