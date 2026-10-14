import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * An explicit staleness status override. Omitted when no override is set.
 */
export type FeatureFlagStalenessStatusOverride =
  | typeof STALE
  | typeof PERMANENT
  | UnparsedObject;
export const STALE = "STALE";
export const PERMANENT = "PERMANENT";
