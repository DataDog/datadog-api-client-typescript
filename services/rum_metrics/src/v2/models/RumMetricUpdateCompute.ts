import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The compute rule to compute the rum-based metric.
 */
export class RumMetricUpdateCompute {
  /**
   * Toggle to include or exclude percentile aggregations for distribution metrics.
   * Only present when `aggregation_type` is `distribution`.
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
      type: "any",
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
