import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The discriminator identifying a scope narrowed to one cohort.
 */
export type ProductAnalyticsRetentionCohortScopeType =
  | typeof COHORT
  | UnparsedObject;
export const COHORT = "cohort";
