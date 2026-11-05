import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Catalog pricing source type.
 */
export type AiGatewayModelPricingCatalogRequestSourceType =
  | typeof CATALOG
  | UnparsedObject;
export const CATALOG = "catalog";
