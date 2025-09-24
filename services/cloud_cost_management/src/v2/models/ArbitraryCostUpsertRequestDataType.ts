import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Upsert arbitrary rule resource type.
 */
export type ArbitraryCostUpsertRequestDataType =
  | typeof UPSERT_ARBITRARY_RULE
  | UnparsedObject;
export const UPSERT_ARBITRARY_RULE = "upsert_arbitrary_rule";
