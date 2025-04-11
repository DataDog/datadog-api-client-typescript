import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTeam } from "./UserTeam";
import { UserTeamIncluded } from "./UserTeamIncluded";

/**
 * Team membership response
 */
export class UserTeamResponse {
  /**
   * A user's relationship with a team
   */
  "data"?: UserTeam;
  /**
   * Resources related to the team memberships
   */
  "included"?: Array<UserTeamIncluded>;
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
      type: "UserTeam",
    },
    included: {
      baseName: "included",
      type: "Array<UserTeamIncluded>",
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
    return UserTeamResponse.attributeTypeMap;
  }

  public constructor() {}
}
