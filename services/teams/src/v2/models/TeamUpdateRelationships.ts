import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";

/**
 * Team update relationships
 */
export class TeamUpdateRelationships {
  /**
   * Relationship between a team and a team link
   */
  "teamLinks"?: RelationshipToTeamLinks;
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
    teamLinks: {
      baseName: "team_links",
      type: "RelationshipToTeamLinks",
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
    return TeamUpdateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
