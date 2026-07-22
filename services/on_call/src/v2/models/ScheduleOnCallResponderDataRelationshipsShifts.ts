import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleOnCallResponderDataRelationshipsShiftsDataItems } from "./ScheduleOnCallResponderDataRelationshipsShiftsDataItems";

/**
 * Defines the list of shifts satisfying this responder group's position. Multiple shifts occur when a schedule has multiple concurrent on-call responders at that position.
 */
export class ScheduleOnCallResponderDataRelationshipsShifts {
  /**
   * Array of references to the shifts included in the response.
   */
  "data"?: Array<ScheduleOnCallResponderDataRelationshipsShiftsDataItems>;
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
    data: {
      baseName: "data",
      type: "Array<ScheduleOnCallResponderDataRelationshipsShiftsDataItems>",
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
    return ScheduleOnCallResponderDataRelationshipsShifts.attributeTypeMap;
  }

  public constructor() {}
}
