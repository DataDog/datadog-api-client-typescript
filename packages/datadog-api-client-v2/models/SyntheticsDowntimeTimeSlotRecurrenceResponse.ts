/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDowntimeFrequency } from "./SyntheticsDowntimeFrequency";
import { SyntheticsDowntimeTimeSlotDate } from "./SyntheticsDowntimeTimeSlotDate";
import { SyntheticsDowntimeWeekday } from "./SyntheticsDowntimeWeekday";
import { SyntheticsDowntimeWeekdayPosition } from "./SyntheticsDowntimeWeekdayPosition";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
   * Positions of the weekdays within a month for a monthly Synthetics downtime recurrence. Used in combination with `weekdays` to schedule occurrences such as "the first Monday of the month".
   */
  "weekdayPositions"?: Array<SyntheticsDowntimeWeekdayPosition>;
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
    weekdayPositions: {
      baseName: "weekdayPositions",
      type: "Array<SyntheticsDowntimeWeekdayPosition>",
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
