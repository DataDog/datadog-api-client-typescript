import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The computed staleness status of a feature flag.
 */
export type FeatureFlagStalenessStatus =
  | typeof ACTIVE
  | typeof STALE
  | typeof PERMANENT
  | UnparsedObject;
export const ACTIVE = "ACTIVE";
export const STALE = "STALE";
export const PERMANENT = "PERMANENT";
