import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Target for retention group by.
 */
export type RetentionGroupByTarget =
  | typeof COHORT
  | typeof RETURN_PERIOD
  | UnparsedObject;
export const COHORT = "cohort";
export const RETURN_PERIOD = "return_period";
