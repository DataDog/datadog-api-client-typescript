/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDowntimeFrequency } from "./SyntheticsDowntimeFrequency";
import { SyntheticsDowntimeTimeSlotDate } from "./SyntheticsDowntimeTimeSlotDate";
import { SyntheticsDowntimeWeekday } from "./SyntheticsDowntimeWeekday";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Recurrence settings for a Synthetics downtime time slot.
 */
export class SyntheticsDowntimeTimeSlotRecurrenceRequest {
  /**
   * A specific date and time used to define the start or end of a Synthetics downtime time slot.
   */
  "end"?: SyntheticsDowntimeTimeSlotDate;
  /**
   * The recurrence frequency of a Synthetics downtime time slot.
   */
  "frequency": SyntheticsDowntimeFrequency;
  /**
   * The interval between recurrences, relative to the frequency.
   */
  "interval"?: number;
  /**
   * Days of the week for a Synthetics downtime recurrence schedule.
   */
  "weekdays"?: Array<SyntheticsDowntimeWeekday>;

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
    end: {
      baseName: "end",
      type: "SyntheticsDowntimeTimeSlotDate",
    },
    frequency: {
      baseName: "frequency",
      type: "SyntheticsDowntimeFrequency",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    weekdays: {
      baseName: "weekdays",
      type: "Array<SyntheticsDowntimeWeekday>",
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
    return SyntheticsDowntimeTimeSlotRecurrenceRequest.attributeTypeMap;
  }

  public constructor() {}
}
