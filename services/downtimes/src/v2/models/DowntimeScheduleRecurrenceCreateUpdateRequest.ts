import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An object defining the recurrence of the downtime.
 */
export class DowntimeScheduleRecurrenceCreateUpdateRequest {
  /**
   * The length of the downtime. Must begin with an integer and end with one of 'm', 'h', d', or 'w'.
   */
  "duration": string;
  /**
   * The `RRULE` standard for defining recurring events.
   * For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`.
   * Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.
   * 
   * **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`).
   * More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api).
   */
  "rrule": string;
  /**
   * ISO-8601 Datetime to start the downtime. Must not include a UTC offset. If not provided, the
   * downtime starts the moment it is created.
   */
  "start"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: { [key: string]: any; } };
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
      required: true,
    },
    rrule: {
      baseName: "rrule",
      type: "string",
      required: true,
    },
    start: {
      baseName: "start",
      type: "string",
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
    return DowntimeScheduleRecurrenceCreateUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
