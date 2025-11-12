/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConnectedTeamRef } from "./ConnectedTeamRef";
import { TeamRef } from "./TeamRef";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
