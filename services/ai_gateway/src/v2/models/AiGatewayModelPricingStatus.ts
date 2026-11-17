import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the gateway has a price for the model.
 */
export type AiGatewayModelPricingStatus =
  | typeof PRICED
  | typeof UNPRICED
  | UnparsedObject;
export const PRICED = "priced";
export const UNPRICED = "unpriced";
