import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMemberTeamData } from "./TeamHierarchyMemberTeamData";

/**
 * Linkage to the requested team.
 */
export class TeamHierarchyMemberTeamRelationship {
  /**
   * Team resource identifier.
   */
  "data": TeamHierarchyMemberTeamData;
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
      type: "TeamHierarchyMemberTeamData",
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
    return TeamHierarchyMemberTeamRelationship.attributeTypeMap;
  }

  public constructor() {}
}
