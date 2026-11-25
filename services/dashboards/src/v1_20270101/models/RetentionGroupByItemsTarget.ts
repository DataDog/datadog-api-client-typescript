import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type RetentionGroupByItemsTarget =
  | typeof COHORT
  | typeof RETURN_PERIOD
  | UnparsedObject;
export const COHORT = "cohort";
export const RETURN_PERIOD = "return_period";
