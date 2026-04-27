import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeFrequency } from "./SyntheticsDowntimeFrequency";
import { SyntheticsDowntimeTimeSlotDate } from "./SyntheticsDowntimeTimeSlotDate";
import { SyntheticsDowntimeWeekday } from "./SyntheticsDowntimeWeekday";

/**
 * Recurrence settings returned in a Synthetics downtime time slot response.
 */
export class SyntheticsDowntimeTimeSlotRecurrenceResponse {
  /**
   * The recurrence frequency of a Synthetics downtime time slot.
   */
  "frequency": SyntheticsDowntimeFrequency;
  /**
   * The interval between recurrences, relative to the frequency.
   */
  "interval": number;
  /**
   * A specific date and time used to define the start or end of a Synthetics downtime time slot.
   */
  "until"?: SyntheticsDowntimeTimeSlotDate;
  /**
   * Days of the week for a Synthetics downtime recurrence schedule.
   */
  "weekdays": Array<SyntheticsDowntimeWeekday>;
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
    frequency: {
      baseName: "frequency",
      type: "SyntheticsDowntimeFrequency",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      required: true,
      format: "int64",
    },
    until: {
      baseName: "until",
      type: "SyntheticsDowntimeTimeSlotDate",
    },
    weekdays: {
      baseName: "weekdays",
      type: "Array<SyntheticsDowntimeWeekday>",
      required: true,
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
    return SyntheticsDowntimeTimeSlotRecurrenceResponse.attributeTypeMap;
  }

  public constructor() {}
}
