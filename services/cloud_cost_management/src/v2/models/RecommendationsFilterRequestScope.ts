import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Recommendations scope. Defaults to `ccm`; use `experiment` for experimental recommendations
 * or `*` for both. An empty value is treated as `ccm`.
 */
export type RecommendationsFilterRequestScope =
  | typeof CCM
  | typeof EXPERIMENT
  | typeof ALL
  | typeof EMPTY
  | UnparsedObject;
export const CCM = "ccm";
export const EXPERIMENT = "experiment";
export const ALL = "*";
export const EMPTY = "";
