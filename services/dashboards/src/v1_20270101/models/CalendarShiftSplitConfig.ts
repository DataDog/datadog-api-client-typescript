import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarShift } from "./CalendarShift";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarShiftSplitConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "shifts": Array<CalendarShift>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    shifts: {
      baseName: "shifts",
      type: "Array<CalendarShift>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarShiftSplitConfig.attributeTypeMap;
  }

  public constructor() {}
}
