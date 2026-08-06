import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether an increase in the insight's value is good, bad, or neutral.
 */
export type GovernanceInsightDirectionality =
  | typeof NEUTRAL
  | typeof INCREASE_BETTER
  | typeof DECREASE_BETTER
  | UnparsedObject;
export const NEUTRAL = "neutral";
export const INCREASE_BETTER = "increase_better";
export const DECREASE_BETTER = "decrease_better";
