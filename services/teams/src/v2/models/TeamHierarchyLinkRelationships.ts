import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkTeamRelationship } from "./TeamHierarchyLinkTeamRelationship";

/**
 * Team hierarchy link relationships
 */
export class TeamHierarchyLinkRelationships {
  /**
   * Team hierarchy link team relationship
   */
  "parentTeam": TeamHierarchyLinkTeamRelationship;
  /**
   * Team hierarchy link team relationship
   */
  "subTeam": TeamHierarchyLinkTeamRelationship;
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
      type: "TeamHierarchyLinkTeamRelationship",
      required: true,
    },
    subTeam: {
      baseName: "sub_team",
      type: "TeamHierarchyLinkTeamRelationship",
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
    return TeamHierarchyLinkRelationships.attributeTypeMap;
  }

  public constructor() {}
}
