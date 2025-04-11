import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeamCreate } from "./UserTeamCreate";

/**
 * Team membership request
 */
export class UserTeamRequest {
  /**
   * A user's relationship with a team
   */
  "data": UserTeamCreate;
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
      type: "UserTeamCreate",
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
    return UserTeamRequest.attributeTypeMap;
  }

  public constructor() {}
}
