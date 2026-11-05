import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Pricing rates for a model.
 */
export class AiGatewayModelPricingRates {
  /**
   * Cost per million tokens for cache reads.
   */
  "cacheReadCostPerMtok"?: number;
  /**
   * Cost per million tokens for cache writes.
   */
  "cacheWriteCostPerMtok"?: number;
  /**
   * Cost per million tokens for non-cached input.
   */
  "nonCachedInputCostPerMtok"?: number;
  /**
   * Cost per million tokens for output.
   */
  "outputCostPerMtok"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cacheReadCostPerMtok: {
      baseName: "cache_read_cost_per_mtok",
      type: "number",
      format: "double",
    },
    cacheWriteCostPerMtok: {
      baseName: "cache_write_cost_per_mtok",
      type: "number",
      format: "double",
    },
    nonCachedInputCostPerMtok: {
      baseName: "non_cached_input_cost_per_mtok",
      type: "number",
      format: "double",
    },
    outputCostPerMtok: {
      baseName: "output_cost_per_mtok",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingRates.attributeTypeMap;
  }

  public constructor() {}
}
