import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The SLO measurement to retrieve.
 */
export type SlosMeasure =
  | typeof GOOD_EVENTS
  | typeof BAD_EVENTS
  | typeof SLO_STATUS
  | typeof ERROR_BUDGET_REMAINING
  | typeof ERROR_BUDGET_REMAINING_HISTORY
  | typeof ERROR_BUDGET_BURNDOWN
  | typeof BURN_RATE
  | typeof SLO_STATUS_HISTORY
  | typeof GOOD_MINUTES
  | typeof BAD_MINUTES
  | UnparsedObject;
export const GOOD_EVENTS = "good_events";
export const BAD_EVENTS = "bad_events";
export const SLO_STATUS = "slo_status";
export const ERROR_BUDGET_REMAINING = "error_budget_remaining";
export const ERROR_BUDGET_REMAINING_HISTORY = "error_budget_remaining_history";
export const ERROR_BUDGET_BURNDOWN = "error_budget_burndown";
export const BURN_RATE = "burn_rate";
export const SLO_STATUS_HISTORY = "slo_status_history";
export const GOOD_MINUTES = "good_minutes";
export const BAD_MINUTES = "bad_minutes";
