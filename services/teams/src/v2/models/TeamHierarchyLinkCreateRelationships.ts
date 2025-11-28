import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkCreateTeamRelationship } from "./TeamHierarchyLinkCreateTeamRelationship";

/**
 * Team hierarchy link creation relationships
 */
export class TeamHierarchyLinkCreateRelationships {
  /**
   * Team relationship for hierarchy link creation
   */
  "parentTeam": TeamHierarchyLinkCreateTeamRelationship;
  /**
   * Team relationship for hierarchy link creation
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
