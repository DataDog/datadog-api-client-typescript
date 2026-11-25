import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesXAxisDayDateFormat } from "./TimeseriesXAxisDayDateFormat";
import { TimeseriesXAxisMonthDateFormat } from "./TimeseriesXAxisMonthDateFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesXAxisDateFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "day"?: TimeseriesXAxisDayDateFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "month"?: TimeseriesXAxisMonthDateFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    day: {
      baseName: "day",
      type: "TimeseriesXAxisDayDateFormat",
    },
    month: {
      baseName: "month",
      type: "TimeseriesXAxisMonthDateFormat",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesXAxisDateFormat.attributeTypeMap;
  }

  public constructor() {}
}
