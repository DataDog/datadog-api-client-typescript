import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AiGatewayModelPricingCatalogRequestConfig } from "./AiGatewayModelPricingCatalogRequestConfig";
import { AiGatewayModelPricingCustomRequestConfig } from "./AiGatewayModelPricingCustomRequestConfig";

/**
 * Pricing configuration accepted when setting model pricing.
 */
export type AiGatewayModelPricingRequestConfig =
  | AiGatewayModelPricingCustomRequestConfig
  | AiGatewayModelPricingCatalogRequestConfig
  | UnparsedObject;
