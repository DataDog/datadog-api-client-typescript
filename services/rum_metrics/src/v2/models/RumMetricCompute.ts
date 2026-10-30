import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RumMetricComputeAggregationType } from "./RumMetricComputeAggregationType";

/**
 * The compute rule to compute the RUM-based metric. It is set at creation and only `include_percentiles` can be updated afterwards.
 */
export class RumMetricCompute {
  /**
   * The type of aggregation to use.
   * `count` counts the matching events. `distribution` aggregates the values found at `path`.
   */
  "aggregationType": RumMetricComputeAggregationType;
  /**
   * Toggle to include or exclude percentile aggregations (p50, p75, p90, p95, p99) for distribution metrics.
   * Required when `aggregation_type` is `distribution`, and must be omitted otherwise.
   */
  "includePercentiles"?: boolean;
  /**
   * The path of the numeric RUM event attribute the metric aggregates on.
   * Only valid when `aggregation_type` is `distribution`.
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
