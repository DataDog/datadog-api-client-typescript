import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SLO time window options.
 */
export type SearchSLOTimeframe =
  | typeof SEVEN_DAYS
  | typeof THIRTY_DAYS
  | typeof NINETY_DAYS
  | UnparsedObject;
export const SEVEN_DAYS = "7d";
export const THIRTY_DAYS = "30d";
export const NINETY_DAYS = "90d";
