import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkCreateTeam } from "./TeamHierarchyLinkCreateTeam";

/**
 * Data about each team that will be connected by the team hierarchy link
 */
export class TeamHierarchyLinkCreateTeamRelationship {
  /**
   * This schema defines the attributes about each team that has to be provided when creating a team hierarchy link
   */
  "data": TeamHierarchyLinkCreateTeam;
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
      type: "TeamHierarchyLinkCreateTeam",
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
    return TeamHierarchyLinkCreateTeamRelationship.attributeTypeMap;
  }

  public constructor() {}
}
