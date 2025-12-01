import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkCreateTeamRelationship } from "./TeamHierarchyLinkCreateTeamRelationship";

/**
 * The related teams that will be connected by the team hierarchy link
 */
export class TeamHierarchyLinkCreateRelationships {
  /**
   * Data about each team that will be connected by the team hierarchy link
   */
  "parentTeam": TeamHierarchyLinkCreateTeamRelationship;
  /**
   * Data about each team that will be connected by the team hierarchy link
   */
  "subTeam": TeamHierarchyLinkCreateTeamRelationship;
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
    parentTeam: {
      baseName: "parent_team",
      type: "TeamHierarchyLinkCreateTeamRelationship",
      required: true,
    },
    subTeam: {
      baseName: "sub_team",
      type: "TeamHierarchyLinkCreateTeamRelationship",
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
    return TeamHierarchyLinkCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
