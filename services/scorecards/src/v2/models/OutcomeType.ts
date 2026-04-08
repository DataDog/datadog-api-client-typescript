import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for an outcome.
 */
export type OutcomeType = typeof OUTCOME | UnparsedObject;
export const OUTCOME = "outcome";
