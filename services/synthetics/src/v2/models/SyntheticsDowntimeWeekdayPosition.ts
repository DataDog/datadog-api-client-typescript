import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The position of a weekday within a month for a monthly Synthetics downtime recurrence. `1` through `4` select the first through fourth occurrence of the weekday in the month, and `-1` selects the last occurrence.
 */
export type SyntheticsDowntimeWeekdayPosition =
  | typeof FIRST
  | typeof SECOND
  | typeof THIRD
  | typeof FOURTH
  | typeof LAST
  | UnparsedObject;
export const FIRST = 1;
export const SECOND = 2;
export const THIRD = 3;
export const FOURTH = 4;
export const LAST = -1;
