import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamType } from "./TeamType";

/**
 * Relationship to Team object.
 */
export class RelationshipToTeamData {
  /**
   * The unique identifier of the team.
   */
  "id"?: string;
  /**
   * Team type
   */
  "type"?: TeamType;
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
    },
    type: {
      baseName: "type",
      type: "TeamType",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToTeamData.attributeTypeMap;
  }

  public constructor() {}
}
