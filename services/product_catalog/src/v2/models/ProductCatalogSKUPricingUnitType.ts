import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the tier's price applies per unit of usage or to a block of usage.
 */
export type ProductCatalogSKUPricingUnitType =
  | typeof BLOCK
  | typeof UNIT
  | UnparsedObject;
export const BLOCK = "block";
export const UNIT = "unit";
