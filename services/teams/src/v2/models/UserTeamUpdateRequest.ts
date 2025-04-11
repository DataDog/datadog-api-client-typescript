import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamUpdate } from "./UserTeamUpdate";

/**
 * Team membership request
 */
export class UserTeamUpdateRequest {
  /**
   * A user's relationship with a team
   */
  "data": UserTeamUpdate;
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
      type: "UserTeamUpdate",
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
    return UserTeamUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
