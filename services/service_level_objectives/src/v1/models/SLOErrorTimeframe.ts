import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The timeframe of the threshold associated with this error
 * or "all" if all thresholds are affected.
 */
export type SLOErrorTimeframe =
  | typeof SEVEN_DAYS
  | typeof THIRTY_DAYS
  | typeof NINETY_DAYS
  | typeof ALL
  | UnparsedObject;
export const SEVEN_DAYS = "7d";
export const THIRTY_DAYS = "30d";
export const NINETY_DAYS = "90d";
export const ALL = "all";
