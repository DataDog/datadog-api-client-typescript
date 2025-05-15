import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DataRelationshipsTeams } from "./DataRelationshipsTeams";

/**
 * Houses relationships for the schedule update, typically referencing teams.
 */
export class ScheduleUpdateRequestDataRelationships {
  /**
   * Associates teams with this schedule in a data structure.
   */
  "teams"?: DataRelationshipsTeams;
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
      type: "DataRelationshipsTeams",
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
