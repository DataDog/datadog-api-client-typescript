import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleUpdateRequestDataRelationshipsTeams } from "./ScheduleUpdateRequestDataRelationshipsTeams";

/**
 * Houses relationships for the schedule update, typically referencing teams.
 */
export class ScheduleUpdateRequestDataRelationships {
  /**
   * Defines the teams that this schedule update is associated with.
   */
  "teams"?: ScheduleUpdateRequestDataRelationshipsTeams;
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
      type: "ScheduleUpdateRequestDataRelationshipsTeams",
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
    return ScheduleUpdateRequestDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
