import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsDowntimeTimeSlotDate } from "./SyntheticsDowntimeTimeSlotDate";
import { SyntheticsDowntimeTimeSlotRecurrenceResponse } from "./SyntheticsDowntimeTimeSlotRecurrenceResponse";

/**
 * A time slot returned in a Synthetics downtime response.
 */
export class SyntheticsDowntimeTimeSlotResponse {
  /**
   * The duration of the time slot in seconds.
   */
  "duration": number;
  /**
   * The unique identifier of the time slot.
   */
  "id": string;
  /**
   * The label for the time slot.
   */
  "name"?: string;
  /**
   * Recurrence settings returned in a Synthetics downtime time slot response.
   */
  "recurrence"?: SyntheticsDowntimeTimeSlotRecurrenceResponse;
  /**
   * A specific date and time used to define the start or end of a Synthetics downtime time slot.
   */
  "start": SyntheticsDowntimeTimeSlotDate;
  /**
   * The IANA timezone name for the time slot.
   */
  "timezone": string;
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
    duration: {
      baseName: "duration",
      type: "number",
      required: true,
      format: "int64",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
    },
    recurrence: {
      baseName: "recurrence",
      type: "SyntheticsDowntimeTimeSlotRecurrenceResponse",
    },
    start: {
      baseName: "start",
      type: "SyntheticsDowntimeTimeSlotDate",
      required: true,
    },
    timezone: {
      baseName: "timezone",
      type: "string",
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
    return SyntheticsDowntimeTimeSlotResponse.attributeTypeMap;
  }

  public constructor() {}
}
