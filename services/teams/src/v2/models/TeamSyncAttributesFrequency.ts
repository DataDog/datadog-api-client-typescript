import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How often the sync process should be run. Defaults to `once` when not provided.
 */
export type TeamSyncAttributesFrequency =
  | typeof ONCE
  | typeof CONTINUOUSLY
  | typeof PAUSED
  | UnparsedObject;
export const ONCE = "once";
export const CONTINUOUSLY = "continuously";
export const PAUSED = "paused";
