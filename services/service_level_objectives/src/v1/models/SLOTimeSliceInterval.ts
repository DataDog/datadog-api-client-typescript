import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The interval used when querying data, which defines the size of a time slice.
 * Two values are allowed: 60 (1 minute) and 300 (5 minutes).
 * If not provided, the value defaults to 300 (5 minutes).
 */
export type SLOTimeSliceInterval =
  | typeof ONE_MINUTE
  | typeof FIVE_MINUTES
  | UnparsedObject;
export const ONE_MINUTE = 60;
export const FIVE_MINUTES = 300;
