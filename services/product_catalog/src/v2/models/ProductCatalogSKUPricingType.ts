import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the SKU is priced. `usage` prices each billable usage unit, and `percent` prices a
 * percentage; percent-priced SKUs have no `billing_units`.
 */
export type ProductCatalogSKUPricingType =
  | typeof USAGE
  | typeof PERCENT
  | UnparsedObject;
export const USAGE = "usage";
export const PERCENT = "percent";
