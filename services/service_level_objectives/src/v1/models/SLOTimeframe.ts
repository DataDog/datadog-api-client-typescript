import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SLO time window options. Note that "custom" is not a valid option for creating
 * or updating SLOs. It is only used when querying SLO history over custom timeframes.
 */
export type SLOTimeframe =
  | typeof SEVEN_DAYS
  | typeof THIRTY_DAYS
  | typeof NINETY_DAYS
  | typeof CUSTOM
  | UnparsedObject;
export const SEVEN_DAYS = "7d";
export const THIRTY_DAYS = "30d";
export const NINETY_DAYS = "90d";
export const CUSTOM = "custom";
