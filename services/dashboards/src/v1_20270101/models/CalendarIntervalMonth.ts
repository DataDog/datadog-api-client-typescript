import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarIntervalMonthType } from "./CalendarIntervalMonthType";
import { DayOfTheMonth } from "./DayOfTheMonth";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarIntervalMonth {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alignment"?: DayOfTheMonth;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "quantity"?: number;
  /**
   * IANA time zone identifier, for example America/New_York.
   */
  "timezone"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CalendarIntervalMonthType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    alignment: {
      baseName: "alignment",
      type: "DayOfTheMonth",
    },
    quantity: {
      baseName: "quantity",
      type: "number",
      format: "double",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CalendarIntervalMonthType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarIntervalMonth.attributeTypeMap;
  }

  public constructor() {}
}
