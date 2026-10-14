import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a feature flag across production environments.
 */
export type FeatureFlagProductionStatus =
  | typeof ENABLED
  | typeof DISABLED
  | typeof OVERRIDDEN
  | UnparsedObject;
export const ENABLED = "ENABLED";
export const DISABLED = "DISABLED";
export const OVERRIDDEN = "OVERRIDDEN";
