import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Recommendations scope. Defaults to `ccm`; use `experiment` for experimental recommendations or `*` for both.
 */
export type RecommendationsFilterRequestScope =
  | typeof CCM
  | typeof EXPERIMENT
  | typeof ALL
  | UnparsedObject;
export const CCM = "ccm";
export const EXPERIMENT = "experiment";
export const ALL = "*";
