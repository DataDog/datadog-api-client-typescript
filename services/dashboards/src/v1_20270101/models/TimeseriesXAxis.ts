import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TimeseriesXAxisDateFormat } from "./TimeseriesXAxisDateFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TimeseriesXAxis {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dateFormat"?: TimeseriesXAxisDateFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dateFormat: {
      baseName: "date_format",
      type: "TimeseriesXAxisDateFormat",
    },
    label: {
      baseName: "label",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TimeseriesXAxis.attributeTypeMap;
  }

  public constructor() {}
}
