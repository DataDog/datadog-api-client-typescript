import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMemberTeamType } from "./TeamHierarchyMemberTeamType";

/**
 * Team resource identifier.
 */
export class TeamHierarchyMemberTeamData {
  /**
   * UUID of the team.
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
    return TeamHierarchyMemberTeamData.attributeTypeMap;
  }

  public constructor() {}
}
