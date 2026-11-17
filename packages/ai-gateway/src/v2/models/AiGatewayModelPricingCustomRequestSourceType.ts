import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Custom pricing source type.
 */
export type AiGatewayModelPricingCustomRequestSourceType =
  | typeof CUSTOM
  | UnparsedObject;
export const CUSTOM = "custom";
