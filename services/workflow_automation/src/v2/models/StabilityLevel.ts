import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The stability level for action filtering.
 */
export type StabilityLevel =
  | typeof UNSPECIFIED
  | typeof DEV
  | typeof BETA
  | typeof STABLE
  | UnparsedObject;
export const UNSPECIFIED = "UNSPECIFIED";
export const DEV = "DEV";
export const BETA = "BETA";
export const STABLE = "STABLE";
