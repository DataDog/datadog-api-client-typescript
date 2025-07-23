import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Options for scheduled rules. When this field is present, the rule runs based on the schedule. When absent, it runs real-time on ingested logs.
 */
export class SecurityMonitoringSchedulingOptions {
  /**
   * Schedule for the rule queries, written in RRULE syntax. See [RFC](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) for syntax reference.
   */
  "rrule"?: string;
  /**
   * Start date for the schedule, in ISO 8601 format without timezone.
   */
  "start"?: string;
  /**
   * Time zone of the start date, in the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.
   */
  "timezone"?: string;
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
    rrule: {
      baseName: "rrule",
      type: "string",
    },
    start: {
      baseName: "start",
      type: "string",
    },
    timezone: {
      baseName: "timezone",
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
    return SecurityMonitoringSchedulingOptions.attributeTypeMap;
  }

  public constructor() {}
}
