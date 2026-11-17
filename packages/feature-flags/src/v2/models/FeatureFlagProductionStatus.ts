import { UnparsedObject } from "@datadog/datadog-api-client-core";

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
