import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines the recurrence pattern for the schedule. Specifies when deployments should be
 * automatically triggered based on maintenance windows.
 */
export class FleetScheduleRecurrenceRule {
  /**
   * List of days of the week when the schedule should trigger. Valid values are:
   * "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
   */
  "daysOfWeek": Array<string>;
  /**
   * Duration of the maintenance window in minutes.
   */
  "maintenanceWindowDuration": number;
  /**
   * Start time of the maintenance window in 24-hour clock format (HH:MM).
   * Deployments will be triggered at this time on the specified days.
   */
  "startMaintenanceWindow": string;
  /**
   * Timezone for the schedule in IANA Time Zone Database format (e.g., "America/New_York", "UTC").
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
    daysOfWeek: {
      baseName: "days_of_week",
      type: "Array<string>",
      required: true,
    },
    maintenanceWindowDuration: {
      baseName: "maintenance_window_duration",
      type: "number",
      required: true,
      format: "int64",
    },
    startMaintenanceWindow: {
      baseName: "start_maintenance_window",
      type: "string",
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
    return FleetScheduleRecurrenceRule.attributeTypeMap;
  }

  public constructor() {}
}
