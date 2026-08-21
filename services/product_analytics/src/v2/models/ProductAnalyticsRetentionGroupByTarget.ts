import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which axis of the retention grid a group-by applies to.
 */
export type ProductAnalyticsRetentionGroupByTarget =
  | typeof COHORT
  | typeof RETURN_PERIOD
  | UnparsedObject;
export const COHORT = "cohort";
export const RETURN_PERIOD = "return_period";
