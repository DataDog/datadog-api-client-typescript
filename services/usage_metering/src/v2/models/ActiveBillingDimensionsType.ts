import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of active billing dimensions data.
 */
export type ActiveBillingDimensionsType =
  | typeof BILLING_DIMENSIONS
  | UnparsedObject;
export const BILLING_DIMENSIONS = "billing_dimensions";
