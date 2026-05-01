import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for sync configuration resources.
 */
export type CloudInventorySyncConfigResourceType =
  | typeof SYNC_CONFIGS
  | UnparsedObject;
export const SYNC_CONFIGS = "sync_configs";
