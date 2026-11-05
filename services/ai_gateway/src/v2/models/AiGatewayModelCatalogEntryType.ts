import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Model catalog entry resource type.
 */
export type AiGatewayModelCatalogEntryType =
  | typeof MODEL_CATALOG_ENTRIES
  | UnparsedObject;
export const MODEL_CATALOG_ENTRIES = "model-catalog-entries";
