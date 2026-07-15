import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallResponderDataRelationshipsShifts } from "./ScheduleOnCallResponderDataRelationshipsShifts";

/**
 * Relationships for a single position's (previous, current, or next) responder group.
 */
export class ScheduleOnCallResponderDataRelationships {
  /**
   * Defines the list of shifts satisfying this responder group's position. Multiple shifts occur when a schedule has multiple concurrent on-call responders at that position.
   */
  "shifts"?: ScheduleOnCallResponderDataRelationshipsShifts;
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
    shifts: {
      baseName: "shifts",
      type: "ScheduleOnCallResponderDataRelationshipsShifts",
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
    return ScheduleOnCallResponderDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
