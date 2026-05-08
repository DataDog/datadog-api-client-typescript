import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Always `sync_configs`.
 */
export type CloudInventorySyncConfigResourceType =
  | typeof SYNC_CONFIGS
  | UnparsedObject;
export const SYNC_CONFIGS = "sync_configs";
