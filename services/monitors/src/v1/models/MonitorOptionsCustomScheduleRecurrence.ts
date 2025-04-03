import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Configuration for a recurrence set on the monitor options for custom schedule.
 */
export class MonitorOptionsCustomScheduleRecurrence {
  /**
   * Defines the recurrence rule (RRULE) for a given schedule.
   */
  "rrule"?: string;
  /**
   * Defines the start date and time of the recurring schedule.
   */
  "start"?: string;
  /**
   * Defines the timezone the schedule runs on.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorOptionsCustomScheduleRecurrence.attributeTypeMap;
  }

  public constructor() {}
}
