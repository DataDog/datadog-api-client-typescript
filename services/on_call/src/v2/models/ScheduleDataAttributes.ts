import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Provides core properties of a schedule object such as its name and time zone.
 */
export class ScheduleDataAttributes {
  /**
   * A short name for the schedule.
   */
  "name"?: string;
  /**
   * The time zone in which this schedule operates.
   */
  "timeZone"?: string;
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
    name: {
      baseName: "name",
      type: "string",
    },
    timeZone: {
      baseName: "time_zone",
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
    return ScheduleDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
