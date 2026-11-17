import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The JSON:API type for scorecard outcomes.
 */
export type UpdateOutcomesAsyncType = typeof BATCHED_OUTCOME | UnparsedObject;
export const BATCHED_OUTCOME = "batched-outcome";
