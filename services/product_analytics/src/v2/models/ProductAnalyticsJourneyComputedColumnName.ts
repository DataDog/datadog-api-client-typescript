import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Name of a computed column to add to each row.
 */
export type ProductAnalyticsJourneyComputedColumnName =
  | typeof FIRST_CONVERSION_TIMESTAMPS
  | UnparsedObject;
export const FIRST_CONVERSION_TIMESTAMPS = "first_conversion_timestamps";
