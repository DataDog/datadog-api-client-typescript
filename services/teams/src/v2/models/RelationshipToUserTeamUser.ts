import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUserTeamUserData } from "./RelationshipToUserTeamUserData";

/**
 * Relationship between team membership and user
 */
export class RelationshipToUserTeamUser {
  /**
   * A user's relationship with a team
   */
  "data": RelationshipToUserTeamUserData;
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
      type: "RelationshipToUserTeamUserData",
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
    return RelationshipToUserTeamUser.attributeTypeMap;
  }

  public constructor() {}
}
