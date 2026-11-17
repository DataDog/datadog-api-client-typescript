import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * `WAITING_FOR_FIRST_REFRESH` until a refresh saves results. `STATS_UNAVAILABLE` when the latest saved refresh has no complete probabilities of being optimal. `ENDED` after the bandit is stopped or completed, and its last estimates are kept. Otherwise, `WARMUP` or `OPTIMIZING` indicates which policy the bandit serves. A paused bandit keeps its state.
 */
export type ExperimentsBanditResultsState =
  | typeof WAITING_FOR_FIRST_REFRESH
  | typeof WARMUP
  | typeof OPTIMIZING
  | typeof STATS_UNAVAILABLE
  | typeof ENDED
  | UnparsedObject;
export const WAITING_FOR_FIRST_REFRESH = "WAITING_FOR_FIRST_REFRESH";
export const WARMUP = "WARMUP";
export const OPTIMIZING = "OPTIMIZING";
export const STATS_UNAVAILABLE = "STATS_UNAVAILABLE";
export const ENDED = "ENDED";
