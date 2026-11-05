import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source type for the pricing configuration.
 */
export type AiGatewayModelPricingSourceType =
  | typeof CATALOG
  | typeof CUSTOM
  | UnparsedObject;
export const CATALOG = "catalog";
export const CUSTOM = "custom";
