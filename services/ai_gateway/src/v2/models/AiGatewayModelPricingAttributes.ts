import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayModelAutomaticPricing } from "./AiGatewayModelAutomaticPricing";
import { AiGatewayModelPricingConfig } from "./AiGatewayModelPricingConfig";
import { AiGatewayModelPricingEffectiveSource } from "./AiGatewayModelPricingEffectiveSource";
import { AiGatewayModelPricingStatus } from "./AiGatewayModelPricingStatus";

/**
 * Attributes of a model pricing resource.
 */
export class AiGatewayModelPricingAttributes {
  /**
   * True when models.dev pricing is authoritative for this organization and provider.
   */
  "authoritative"?: boolean;
  /**
   * The published models.dev price. Present only when it is the effective price.
   */
  "automaticPricing"?: AiGatewayModelAutomaticPricing;
  /**
   * True when a `BLOCK` budget covering this model rejects its requests before they reach the provider.
   */
  "blocksBudgetedRequests"?: boolean;
  /**
   * Effective provider multiplier applied to every reported rate.
   */
  "costMultiplier"?: number;
  /**
   * True when the provider bills this model per minute of audio instead of per token, as with transcription
   * models. The gateway prices only per token, so it can't charge for these models, and a per-token
   * override can't express their rate.
   */
  "durationPriced"?: boolean;
  /**
   * Effective source of the model pricing data.
   */
  "effectiveSource"?: AiGatewayModelPricingEffectiveSource;
  /**
   * Pricing configuration for a model.
   */
  "pricingConfig"?: AiGatewayModelPricingConfig;
  /**
   * Whether the gateway has a price for the model.
   */
  "status"?: AiGatewayModelPricingStatus;
  /**
   * Human-readable sentence for `unpriced_reason`. Omitted when the model is priced or the code has no description yet.
   */
  "unpricedDescription"?: string;
  /**
   * Stable code explaining why the model has no price, such as `automatic_price_absent`. Omitted when the model is priced.
   */
  "unpricedReason"?: string;
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
    authoritative: {
      baseName: "authoritative",
      type: "boolean",
    },
    automaticPricing: {
      baseName: "automatic_pricing",
      type: "AiGatewayModelAutomaticPricing",
    },
    blocksBudgetedRequests: {
      baseName: "blocks_budgeted_requests",
      type: "boolean",
    },
    costMultiplier: {
      baseName: "cost_multiplier",
      type: "number",
      format: "double",
    },
    durationPriced: {
      baseName: "duration_priced",
      type: "boolean",
    },
    effectiveSource: {
      baseName: "effective_source",
      type: "AiGatewayModelPricingEffectiveSource",
    },
    pricingConfig: {
      baseName: "pricing_config",
      type: "AiGatewayModelPricingConfig",
    },
    status: {
      baseName: "status",
      type: "AiGatewayModelPricingStatus",
    },
    unpricedDescription: {
      baseName: "unpriced_description",
      type: "string",
    },
    unpricedReason: {
      baseName: "unpriced_reason",
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
    return AiGatewayModelPricingAttributes.attributeTypeMap;
  }

  public constructor() {}
}
