import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The version of the product catalog contract to return.
 */
export type ProductCatalogSKUsAPIVersion = typeof V1 | UnparsedObject;
export const V1 = "v1";
