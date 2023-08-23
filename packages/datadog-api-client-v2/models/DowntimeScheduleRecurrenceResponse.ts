/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An RRULE-based recurring downtime.
 */
export class DowntimeScheduleRecurrenceResponse {
  /**
   * The length of the downtime. Must begin with an integer and end with one of 'm', 'h', d', or 'w'.
   */
  "duration"?: string;
  /**
   * The `RRULE` standard for defining recurring events.
   * For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`.
   * Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.
   *
   * **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`).
   * More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api).
   */
  "rrule"?: string;
  /**
   * ISO-8601 Datetime to start the downtime. Must not include a UTC offset. If not provided, the
   * downtime starts the moment it is created.
   */
  "start"?: string;

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
      type: "string",
    },
    rrule: {
      baseName: "rrule",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "string",
    },
  };
}
