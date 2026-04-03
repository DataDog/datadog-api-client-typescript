import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The progression strategy used by a progressive rollout.
 */
export type RolloutStrategy =
  | typeof UNIFORM_INTERVALS
  | typeof NO_ROLLOUT
  | UnparsedObject;
export const UNIFORM_INTERVALS = "UNIFORM_INTERVALS";
export const NO_ROLLOUT = "NO_ROLLOUT";
