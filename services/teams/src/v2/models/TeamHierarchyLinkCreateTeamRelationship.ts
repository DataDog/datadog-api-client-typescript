import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkCreateTeam } from "./TeamHierarchyLinkCreateTeam";

/**
 * Team relationship for hierarchy link creation
 */
export class TeamHierarchyLinkCreateTeamRelationship {
  /**
   * Team reference for hierarchy link creation
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
