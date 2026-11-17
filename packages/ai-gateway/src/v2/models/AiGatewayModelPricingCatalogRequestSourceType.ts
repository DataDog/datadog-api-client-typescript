import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Catalog pricing source type.
 */
export type AiGatewayModelPricingCatalogRequestSourceType =
  | typeof CATALOG
  | UnparsedObject;
export const CATALOG = "catalog";
