import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallRespondersData } from "./ScheduleOnCallRespondersData";
import { ScheduleOnCallRespondersIncluded } from "./ScheduleOnCallRespondersIncluded";

/**
 * Root object representing a schedule's on-call responders, grouped by position (previous, current, next), for a given point in time.
 */
export class ScheduleOnCallResponders {
  /**
   * The main data object representing a schedule's on-call responders lookup, including relationships and metadata.
   */
  "data"?: ScheduleOnCallRespondersData;
  /**
   * Related resources referenced in the responder groups' relationships, such as shifts, schedules, and users.
   */
  "included"?: Array<ScheduleOnCallRespondersIncluded>;
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
    data: {
      baseName: "data",
      type: "ScheduleOnCallRespondersData",
    },
    included: {
      baseName: "included",
      type: "Array<ScheduleOnCallRespondersIncluded>",
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
    return ScheduleOnCallResponders.attributeTypeMap;
  }

  public constructor() {}
}
