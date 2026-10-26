import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMemberTeamAttributes } from "./TeamHierarchyMemberTeamAttributes";
import { TeamHierarchyMemberTeamType } from "./TeamHierarchyMemberTeamType";

/**
 * The requested team, included at most once. Descendant teams are not included.
 */
export class TeamHierarchyMemberTeam {
  /**
   * Available attributes of the requested team.
   */
  "attributes"?: TeamHierarchyMemberTeamAttributes;
  /**
   * UUID of the requested team.
   */
  "id": string;
  /**
   * Requested team resource type.
   */
  "type": TeamHierarchyMemberTeamType;
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
    attributes: {
      baseName: "attributes",
      type: "TeamHierarchyMemberTeamAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "TeamHierarchyMemberTeamType",
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
    return TeamHierarchyMemberTeam.attributeTypeMap;
  }

  public constructor() {}
}
