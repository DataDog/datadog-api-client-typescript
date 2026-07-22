import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Invitee that can access an invite-only shared dashboard.
 */
export class SharedDashboardInvitee {
  /**
   * Time when the invitee's access expires.
   */
  "accessExpiration": Date|null;
  /**
   * Time when the invitee was added.
   */
  "createdAt": Date;
  /**
   * Email address of the invitee.
   */
  "email": string;
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
    accessExpiration: {
      baseName: "access_expiration",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
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
    return SharedDashboardInvitee.attributeTypeMap;
  }

  public constructor() {}
}
