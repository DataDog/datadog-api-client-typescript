import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The compute rule properties that can be updated. Only valid for metrics whose `aggregation_type` is `distribution`.
 */
export class RumMetricUpdateCompute {
  /**
   * Toggle to include or exclude percentile aggregations (p50, p75, p90, p95, p99) for distribution metrics.
   * Required when `aggregation_type` is `distribution`, and must be omitted otherwise.
   */
  "includePercentiles"?: boolean;
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
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
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
    return RumMetricUpdateCompute.attributeTypeMap;
  }

  public constructor() {}
}
