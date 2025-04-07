import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserInvitationResponseData } from "./UserInvitationResponseData";

/**
 * User invitations as returned by the API.
 */
export class UserInvitationsResponse {
  /**
   * Array of user invitations.
   */
  "data"?: Array<UserInvitationResponseData>;
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
      type: "Array<UserInvitationResponseData>",
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
    return UserInvitationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
