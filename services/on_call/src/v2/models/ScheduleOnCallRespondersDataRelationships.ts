import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallRespondersDataRelationshipsResponders } from "./ScheduleOnCallRespondersDataRelationshipsResponders";
import { ScheduleOnCallRespondersDataRelationshipsSchedule } from "./ScheduleOnCallRespondersDataRelationshipsSchedule";

/**
 * Relationships for a schedule's on-call responders lookup, including the schedule and its responder groups.
 */
export class ScheduleOnCallRespondersDataRelationships {
  /**
   * Defines the list of per-position (previous, current, next) responder groups for the schedule.
   */
  "responders"?: ScheduleOnCallRespondersDataRelationshipsResponders;
  /**
   * Defines the relationship to the schedule this on-call responders lookup was performed for.
   */
  "schedule"?: ScheduleOnCallRespondersDataRelationshipsSchedule;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    responders: {
      baseName: "responders",
      type: "ScheduleOnCallRespondersDataRelationshipsResponders",
    },
    schedule: {
      baseName: "schedule",
      type: "ScheduleOnCallRespondersDataRelationshipsSchedule",
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
    return ScheduleOnCallRespondersDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
