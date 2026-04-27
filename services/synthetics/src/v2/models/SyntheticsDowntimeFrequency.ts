import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The recurrence frequency of a Synthetics downtime time slot.
 */
export type SyntheticsDowntimeFrequency =
  | typeof DAILY
  | typeof WEEKLY
  | typeof MONTHLY
  | typeof YEARLY
  | UnparsedObject;
export const DAILY = "DAILY";
export const WEEKLY = "WEEKLY";
export const MONTHLY = "MONTHLY";
export const YEARLY = "YEARLY";
