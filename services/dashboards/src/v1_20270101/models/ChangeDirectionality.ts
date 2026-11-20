import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ChangeDirectionality =
  | typeof INCREASE_BETTER
  | typeof DECREASE_BETTER
  | typeof NEUTRAL
  | UnparsedObject;
export const INCREASE_BETTER = "increase_better";
export const DECREASE_BETTER = "decrease_better";
export const NEUTRAL = "neutral";
