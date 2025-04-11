import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleDataRelationshipsLayers } from "./ScheduleDataRelationshipsLayers";
import { ScheduleDataRelationshipsTeams } from "./ScheduleDataRelationshipsTeams";

/**
 * Groups the relationships for a schedule object, referencing layers and teams.
 */
export class ScheduleDataRelationships {
  /**
   * Associates layers with this schedule in a data structure.
   */
  "layers"?: ScheduleDataRelationshipsLayers;
  /**
   * Associates teams with this schedule in a data structure.
   */
  "teams"?: ScheduleDataRelationshipsTeams;
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
    layers: {
      baseName: "layers",
      type: "ScheduleDataRelationshipsLayers",
    },
    teams: {
      baseName: "teams",
      type: "ScheduleDataRelationshipsTeams",
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
    return ScheduleDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
