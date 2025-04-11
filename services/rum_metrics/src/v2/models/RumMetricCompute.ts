import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricComputeAggregationType } from "./RumMetricComputeAggregationType";

/**
 * The compute rule to compute the rum-based metric.
 */
export class RumMetricCompute {
  /**
   * The type of aggregation to use.
   */
  "aggregationType": RumMetricComputeAggregationType;
  /**
   * Toggle to include or exclude percentile aggregations for distribution metrics.
   * Only present when `aggregation_type` is `distribution`.
   */
  "includePercentiles"?: boolean;
  /**
   * The path to the value the rum-based metric will aggregate on.
   * Only present when `aggregation_type` is `distribution`.
   */
  "path"?: string;
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
    aggregationType: {
      baseName: "aggregation_type",
      type: "RumMetricComputeAggregationType",
      required: true,
    },
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
    },
    path: {
      baseName: "path",
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
    return RumMetricCompute.attributeTypeMap;
  }

  public constructor() {}
}
