import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The billing frequency applied to on-demand usage of the SKU by default.
 */
export type ProductCatalogSKUOnDemandOption =
  | typeof HOURLY
  | typeof MONTHLY
  | UnparsedObject;
export const HOURLY = "hourly";
export const MONTHLY = "monthly";
