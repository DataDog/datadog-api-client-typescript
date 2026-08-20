import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of an upstream-entity interaction.
 */
export type LLMObsTraceInteractionType =
  | typeof TRACE
  | typeof EXPERIMENT_TRACE
  | typeof SESSION
  | UnparsedObject;
export const TRACE = "trace";
export const EXPERIMENT_TRACE = "experiment_trace";
export const SESSION = "session";
