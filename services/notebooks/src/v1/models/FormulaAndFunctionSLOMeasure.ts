import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * SLO measures queries.
 */
export type FormulaAndFunctionSLOMeasure =
  | typeof GOOD_EVENTS
  | typeof BAD_EVENTS
  | typeof GOOD_MINUTES
  | typeof BAD_MINUTES
  | typeof SLO_STATUS
  | typeof ERROR_BUDGET_REMAINING
  | typeof BURN_RATE
  | typeof ERROR_BUDGET_BURNDOWN
  | UnparsedObject;
export const GOOD_EVENTS = "good_events";
export const BAD_EVENTS = "bad_events";
export const GOOD_MINUTES = "good_minutes";
export const BAD_MINUTES = "bad_minutes";
export const SLO_STATUS = "slo_status";
export const ERROR_BUDGET_REMAINING = "error_budget_remaining";
export const BURN_RATE = "burn_rate";
export const ERROR_BUDGET_BURNDOWN = "error_budget_burndown";
