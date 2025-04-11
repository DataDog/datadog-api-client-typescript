import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUserTeamTeam } from "./RelationshipToUserTeamTeam";
import { RelationshipToUserTeamUser } from "./RelationshipToUserTeamUser";

/**
 * Relationship between membership and a user
 */
export class UserTeamRelationships {
  /**
   * Relationship between team membership and team
   */
  "team"?: RelationshipToUserTeamTeam;
  /**
   * Relationship between team membership and user
   */
  "user"?: RelationshipToUserTeamUser;
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
    team: {
      baseName: "team",
      type: "RelationshipToUserTeamTeam",
    },
    user: {
      baseName: "user",
      type: "RelationshipToUserTeamUser",
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
    return UserTeamRelationships.attributeTypeMap;
  }

  public constructor() {}
}
