import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ConnectedTeamRef } from "./ConnectedTeamRef";
import { TeamRef } from "./TeamRef";

/**
 * Relationships of the team connection.
 */
export class TeamConnectionRelationships {
  /**
   * Reference to a team from an external system.
   */
  "connectedTeam"?: ConnectedTeamRef;
  /**
   * Reference to a Datadog team.
   */
  "team"?: TeamRef;
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
    connectedTeam: {
      baseName: "connected_team",
      type: "ConnectedTeamRef",
    },
    team: {
      baseName: "team",
      type: "TeamRef",
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
    return TeamConnectionRelationships.attributeTypeMap;
  }

  public constructor() {}
}
