import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A compute rule for aggregating data.
 */
export class ProductAnalyticsCompute {
  /**
   * The aggregation function (count, cardinality, avg, sum, min, max, etc.).
   */
  "aggregation": string;
  /**
   * Time bucket size in milliseconds. Required for timeseries queries.
   */
  "interval"?: number;
  /**
   * The metric to aggregate on. Required for non-count aggregations.
   */
  "metric"?: string;
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
    aggregation: {
      baseName: "aggregation",
      type: "string",
      required: true,
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
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
    return ProductAnalyticsCompute.attributeTypeMap;
  }

  public constructor() {}
}
