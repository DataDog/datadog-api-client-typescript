import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A day of the week for a Synthetics downtime recurrence.
 */
export type SyntheticsDowntimeWeekday =
  | typeof MONDAY
  | typeof TUESDAY
  | typeof WEDNESDAY
  | typeof THURSDAY
  | typeof FRIDAY
  | typeof SATURDAY
  | typeof SUNDAY
  | UnparsedObject;
export const MONDAY = "MO";
export const TUESDAY = "TU";
export const WEDNESDAY = "WE";
export const THURSDAY = "TH";
export const FRIDAY = "FR";
export const SATURDAY = "SA";
export const SUNDAY = "SU";
