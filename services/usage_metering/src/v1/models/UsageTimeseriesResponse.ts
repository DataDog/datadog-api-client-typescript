import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageTimeseriesHour } from "./UsageTimeseriesHour";

/**
 * Response containing hourly usage of timeseries.
 */
export class UsageTimeseriesResponse {
  /**
   * An array of objects regarding hourly usage of timeseries.
   */
  "usage"?: Array<UsageTimeseriesHour>;
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
    usage: {
      baseName: "usage",
      type: "Array<UsageTimeseriesHour>",
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
    return UsageTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
