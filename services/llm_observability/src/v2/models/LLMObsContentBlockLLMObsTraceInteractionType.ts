import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Upstream interaction type referenced by an `llmobs_trace` block.
 * Restricted to `trace` or `experiment_trace`.
 */
export type LLMObsContentBlockLLMObsTraceInteractionType =
  | typeof TRACE
  | typeof EXPERIMENT_TRACE
  | UnparsedObject;
export const TRACE = "trace";
export const EXPERIMENT_TRACE = "experiment_trace";
