import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The journey-level metric the graph filter applies to.
 */
export type ProductAnalyticsJourneySearchGraphFilterName =
  | typeof TIME_TO_CONVERT
  | typeof SESSION
  | typeof DROPOFF_RATE
  | UnparsedObject;
export const TIME_TO_CONVERT = "__dd.time_to_convert";
export const SESSION = "__dd.session";
export const DROPOFF_RATE = "__dd.dropoff_rate";
