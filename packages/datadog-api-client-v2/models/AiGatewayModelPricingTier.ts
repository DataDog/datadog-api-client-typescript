/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Custom price for requests at or above `context_min_tokens` input tokens, in `service_tier` when it is set.
 * Each tier needs a `service_tier`, a positive `context_min_tokens`, or both. Rates it omits keep the base custom rate.
 */
export class AiGatewayModelPricingTier {
  /**
   * Minimum input tokens for the price to apply.
   */
  "contextMinTokens"?: Int64;
  /**
   * Pricing rates for a model.
   */
  "rates": AiGatewayModelPricingRates;
  /**
   * Provider service tier the price applies to. Lowercase letters, digits, `_` and `-`.
   */
  "serviceTier"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contextMinTokens: {
      baseName: "context_min_tokens",
      type: "number",
      format: "int64",
    },
    rates: {
      baseName: "rates",
      type: "AiGatewayModelPricingRates",
      required: true,
    },
    serviceTier: {
      baseName: "service_tier",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AiGatewayModelPricingTier.attributeTypeMap;
  }

  public constructor() {}
}
