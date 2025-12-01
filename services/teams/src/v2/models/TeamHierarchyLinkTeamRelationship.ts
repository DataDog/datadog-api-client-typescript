import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyLinkTeam } from "./TeamHierarchyLinkTeam";

/**
 * Team hierarchy link team relationship
 */
export class TeamHierarchyLinkTeamRelationship {
  /**
   * Team hierarchy links connect different teams. This represents team objects that are connected by the team hierarchy link.
   */
  "data": TeamHierarchyLinkTeam;
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
      type: "TeamHierarchyLinkTeam",
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
    return TeamHierarchyLinkTeamRelationship.attributeTypeMap;
  }

  public constructor() {}
}
