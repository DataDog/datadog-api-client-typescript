import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How subjects are assigned to variants. `DATADOG` is the native scheme. `EPPO` reproduces the assignments that Eppo made for a flag migrated from Eppo, so its subjects keep their variants. Set when the flag is created and never changed.
 */
export type FeatureFlagBucketingMode =
  | typeof DATADOG
  | typeof EPPO
  | UnparsedObject;
export const DATADOG = "DATADOG";
export const EPPO = "EPPO";
