import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Weekday } from "./Weekday";

/**
 * Defines a single time restriction rule with start and end times and the applicable weekdays.
 */
export class TimeRestriction {
  /**
   * A day of the week.
   */
  "endDay"?: Weekday;
  /**
   * Specifies the ending time for this restriction.
   */
  "endTime"?: string;
  /**
   * A day of the week.
   */
  "startDay"?: Weekday;
  /**
   * Specifies the starting time for this restriction.
   */
  "startTime"?: string;
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
    endDay: {
      baseName: "end_day",
      type: "Weekday",
    },
    endTime: {
      baseName: "end_time",
      type: "string",
    },
    startDay: {
      baseName: "start_day",
      type: "Weekday",
    },
    startTime: {
      baseName: "start_time",
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
    return TimeRestriction.attributeTypeMap;
  }

  public constructor() {}
}
