import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of interaction in an annotation queue.
 */
export type LLMObsInteractionType =
  | typeof TRACE
  | typeof EXPERIMENT_TRACE
  | UnparsedObject;
export const TRACE = "trace";
export const EXPERIMENT_TRACE = "experiment_trace";
