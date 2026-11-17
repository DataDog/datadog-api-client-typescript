import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Why the arm's estimate and interval are unavailable. Absent when they are available.
 */
export type ExperimentsBanditPosteriorUnavailableReason =
  | typeof NO_DATA
  | typeof INSUFFICIENT_DATA
  | typeof ZERO_VARIANCE
  | UnparsedObject;
export const NO_DATA = "no_data";
export const INSUFFICIENT_DATA = "insufficient_data";
export const ZERO_VARIANCE = "zero_variance";
