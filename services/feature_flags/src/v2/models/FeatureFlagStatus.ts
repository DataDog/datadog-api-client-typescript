import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a feature flag in an environment.
 */
export type FeatureFlagStatus =
  | typeof ENABLED
  | typeof DISABLED
  | UnparsedObject;
export const ENABLED = "ENABLED";
export const DISABLED = "DISABLED";
