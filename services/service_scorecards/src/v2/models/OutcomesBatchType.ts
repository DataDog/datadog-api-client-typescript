import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for scorecard outcomes.
 */
export type OutcomesBatchType = typeof BATCHED_OUTCOME | UnparsedObject;
export const BATCHED_OUTCOME = "batched-outcome";
