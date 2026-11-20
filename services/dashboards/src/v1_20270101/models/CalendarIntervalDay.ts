import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarIntervalDayType } from "./CalendarIntervalDayType";
import { Hour } from "./Hour";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarIntervalDay {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alignment"?: Hour;
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
  "type": CalendarIntervalDayType;
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
      type: "Hour",
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
      type: "CalendarIntervalDayType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarIntervalDay.attributeTypeMap;
  }

  public constructor() {}
}
