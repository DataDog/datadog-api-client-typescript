/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDowntimeTimeSlotDate } from "./SyntheticsDowntimeTimeSlotDate";
import { SyntheticsDowntimeTimeSlotRecurrenceRequest } from "./SyntheticsDowntimeTimeSlotRecurrenceRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A time slot for a Synthetics downtime create or update request.
 */
export class SyntheticsDowntimeTimeSlotRequest {
  /**
   * The duration of the time slot in seconds, between 60 and 604800.
   */
  "duration": number;
  /**
   * An optional label for the time slot.
   */
  "name"?: string;
  /**
   * Recurrence settings for a Synthetics downtime time slot.
   */
  "recurrence"?: SyntheticsDowntimeTimeSlotRecurrenceRequest;
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
    name: {
      baseName: "name",
      type: "string",
    },
    recurrence: {
      baseName: "recurrence",
      type: "SyntheticsDowntimeTimeSlotRecurrenceRequest",
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
    return SyntheticsDowntimeTimeSlotRequest.attributeTypeMap;
  }

  public constructor() {}
}
