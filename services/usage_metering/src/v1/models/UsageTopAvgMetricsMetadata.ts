import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsageTopAvgMetricsPagination } from "./UsageTopAvgMetricsPagination";

/**
 * The object containing document metadata.
 */
export class UsageTopAvgMetricsMetadata {
  /**
   * The day value from the user request that contains the returned usage data. (If day was used the request)
   */
  "day"?: Date;
  /**
   * The month value from the user request that contains the returned usage data. (If month was used the request)
   */
  "month"?: Date;
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: UsageTopAvgMetricsPagination;
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
    day: {
      baseName: "day",
      type: "Date",
      format: "date-time",
    },
    month: {
      baseName: "month",
      type: "Date",
      format: "date-time",
    },
    pagination: {
      baseName: "pagination",
      type: "UsageTopAvgMetricsPagination",
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
    return UsageTopAvgMetricsMetadata.attributeTypeMap;
  }

  public constructor() {}
}
