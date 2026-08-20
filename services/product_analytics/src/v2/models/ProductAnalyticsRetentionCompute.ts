import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsRetentionComputeMetric } from "./ProductAnalyticsRetentionComputeMetric";

/**
 * The metric and aggregation applied to a retention query.
 */
export class ProductAnalyticsRetentionCompute {
  /**
   * The aggregation function applied to the metric, such as `count` or `avg`.
   */
  "aggregation": string;
  /**
   * The retention metric to compute, either an absolute count or a rate.
   */
  "metric": ProductAnalyticsRetentionComputeMetric;
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
    metric: {
      baseName: "metric",
      type: "ProductAnalyticsRetentionComputeMetric",
      required: true,
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
    return ProductAnalyticsRetentionCompute.attributeTypeMap;
  }

  public constructor() {}
}
