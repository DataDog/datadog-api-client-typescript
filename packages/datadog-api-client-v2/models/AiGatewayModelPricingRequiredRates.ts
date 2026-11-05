/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Complete set of rates required for custom pricing.
 */
export class AiGatewayModelPricingRequiredRates {
  /**
   * Cost per million tokens for cache reads.
   */
  "cacheReadCostPerMtok": number;
  /**
   * Cost per million tokens for cache writes.
   */
  "cacheWriteCostPerMtok": number;
  /**
   * Cost per million tokens for non-cached input.
   */
  "nonCachedInputCostPerMtok": number;
  /**
   * Cost per million tokens for output.
   */
  "outputCostPerMtok": number;

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
      required: true,
      format: "double",
    },
    cacheWriteCostPerMtok: {
      baseName: "cache_write_cost_per_mtok",
      type: "number",
      required: true,
      format: "double",
    },
    nonCachedInputCostPerMtok: {
      baseName: "non_cached_input_cost_per_mtok",
      type: "number",
      required: true,
      format: "double",
    },
    outputCostPerMtok: {
      baseName: "output_cost_per_mtok",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingRequiredRates.attributeTypeMap;
  }

  public constructor() {}
}
