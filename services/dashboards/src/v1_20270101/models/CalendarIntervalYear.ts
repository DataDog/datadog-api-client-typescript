import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarIntervalYearType } from "./CalendarIntervalYearType";
import { Month } from "./Month";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarIntervalYear {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "alignment"?: Month;
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
  "type": CalendarIntervalYearType;
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
      type: "Month",
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
      type: "CalendarIntervalYearType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarIntervalYear.attributeTypeMap;
  }

  public constructor() {}
}
