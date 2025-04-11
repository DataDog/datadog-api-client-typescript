import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToUserTeamTeamData } from "./RelationshipToUserTeamTeamData";

/**
 * Relationship between team membership and team
 */
export class RelationshipToUserTeamTeam {
  /**
   * The team associated with the membership
   */
  "data": RelationshipToUserTeamTeamData;
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
      type: "RelationshipToUserTeamTeamData",
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
    return RelationshipToUserTeamTeam.attributeTypeMap;
  }

  public constructor() {}
}
