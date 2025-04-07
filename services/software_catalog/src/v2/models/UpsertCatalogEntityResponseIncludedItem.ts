import { UnparsedObject } from "@datadog/datadog-api-client";

import { EntityResponseIncludedSchema } from "./EntityResponseIncludedSchema";

/**
 * Upsert entity response included item.
 */
export type UpsertCatalogEntityResponseIncludedItem =
  | EntityResponseIncludedSchema
  | UnparsedObject;
