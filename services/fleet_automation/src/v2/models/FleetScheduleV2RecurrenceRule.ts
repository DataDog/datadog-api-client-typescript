import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Defines the recurrence pattern for the schedule.
 */
export class FleetScheduleV2RecurrenceRule {
  /**
   * Days of the week when the schedule triggers. Valid values are
   * "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun".
   */
  "daysOfWeek"?: Array<string>;
  /**
   * Interval between schedule runs in weeks. 1 means the schedule runs every week
   * on the specified days. Higher values repeat every N weeks.
   */
  "interval"?: number;
  /**
   * Duration of the maintenance window in minutes.
   */
  "maintenanceWindowDuration"?: number;
  /**
   * Start time of the maintenance window in 24-hour clock format (HHMM).
   * Deployments are triggered at this time on the specified days.
   */
  "startMaintenanceWindow"?: string;
  /**
   * Timezone in IANA Time Zone Database format.
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
    daysOfWeek: {
      baseName: "days_of_week",
      type: "Array<string>",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    maintenanceWindowDuration: {
      baseName: "maintenance_window_duration",
      type: "number",
      format: "int64",
    },
    startMaintenanceWindow: {
      baseName: "start_maintenance_window",
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
    return FleetScheduleV2RecurrenceRule.attributeTypeMap;
  }

  public constructor() {}
}
