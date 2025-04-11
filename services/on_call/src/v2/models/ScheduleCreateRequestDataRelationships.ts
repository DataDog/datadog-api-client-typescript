import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleCreateRequestDataRelationshipsTeams } from "./ScheduleCreateRequestDataRelationshipsTeams";

/**
 * Gathers relationship objects for the schedule creation request, including the teams to associate.
 */
export class ScheduleCreateRequestDataRelationships {
  /**
   * Associates the new schedule with one or more teams.
   */
  "teams"?: ScheduleCreateRequestDataRelationshipsTeams;
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
    teams: {
      baseName: "teams",
      type: "ScheduleCreateRequestDataRelationshipsTeams",
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
    return ScheduleCreateRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
