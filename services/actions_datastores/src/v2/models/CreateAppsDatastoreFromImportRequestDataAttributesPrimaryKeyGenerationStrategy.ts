import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The `attributes` `primary_key_generation_strategy`.
 */
export type CreateAppsDatastoreFromImportRequestDataAttributesPrimaryKeyGenerationStrategy =
  typeof NONE | typeof UUID | UnparsedObject;
export const NONE = "none";
export const UUID = "uuid";
