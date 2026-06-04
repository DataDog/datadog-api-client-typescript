import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for a span item in an experiment spans response.
 */
export type LLMObsExperimentSpanType = typeof EXPERIMENTS_SPAN | UnparsedObject;
export const EXPERIMENTS_SPAN = "experiments";
