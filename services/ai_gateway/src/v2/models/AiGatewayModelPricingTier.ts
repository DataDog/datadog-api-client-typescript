import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelPricingRates } from "./AiGatewayModelPricingRates";

/**
 * Custom price for requests at or above `context_min_tokens` input tokens, in `service_tier` when it is set.
 * Each tier needs a `service_tier`, a positive `context_min_tokens`, or both. Rates it omits keep the base custom rate.
 */
export class AiGatewayModelPricingTier {
  /**
   * Minimum input tokens for the price to apply.
   */
  "contextMinTokens"?: number;
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
