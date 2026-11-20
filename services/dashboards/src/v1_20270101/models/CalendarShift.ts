import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CalendarShiftUnit } from "./CalendarShiftUnit";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CalendarShift {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "amount": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unit": CalendarShiftUnit;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    amount: {
      baseName: "amount",
      type: "number",
      required: true,
      format: "double",
    },
    unit: {
      baseName: "unit",
      type: "CalendarShiftUnit",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CalendarShift.attributeTypeMap;
  }

  public constructor() {}
}
