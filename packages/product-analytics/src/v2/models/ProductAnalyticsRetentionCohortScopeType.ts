import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The discriminator identifying a scope narrowed to one cohort.
 */
export type ProductAnalyticsRetentionCohortScopeType =
  | typeof COHORT
  | UnparsedObject;
export const COHORT = "cohort";
