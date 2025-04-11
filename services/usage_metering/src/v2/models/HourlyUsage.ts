import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HourlyUsageAttributes } from "./HourlyUsageAttributes";
import { UsageTimeSeriesType } from "./UsageTimeSeriesType";

/**
 * Hourly usage for a product family for an org.
 */
export class HourlyUsage {
  /**
   * Attributes of hourly usage for a product family for an org for a time period.
   */
  "attributes"?: HourlyUsageAttributes;
  /**
   * Unique ID of the response.
   */
  "id"?: string;
  /**
   * Type of usage data.
   */
  "type"?: UsageTimeSeriesType;
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
    attributes: {
      baseName: "attributes",
      type: "HourlyUsageAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UsageTimeSeriesType",
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
    return HourlyUsage.attributeTypeMap;
  }

  public constructor() {}
}
