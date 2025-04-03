import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserInvitationData } from "./UserInvitationData";

/**
 * Object to invite users to join the organization.
 */
export class UserInvitationsRequest {
  /**
   * List of user invitations.
   */
  "data": Array<UserInvitationData>;
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
      type: "Array<UserInvitationData>",
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
    return UserInvitationsRequest.attributeTypeMap;
  }

  public constructor() {}
}
