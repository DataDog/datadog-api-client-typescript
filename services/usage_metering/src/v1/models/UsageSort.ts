import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The field to sort by.
 */
export type UsageSort =
  | typeof COMPUTED_ON
  | typeof SIZE
  | typeof START_DATE
  | typeof END_DATE
  | UnparsedObject;
export const COMPUTED_ON = "computed_on";
export const SIZE = "size";
export const START_DATE = "start_date";
export const END_DATE = "end_date";
