import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of an annotated interaction.
 */
export type LLMObsAnyInteractionType =
  | typeof TRACE
  | typeof EXPERIMENT_TRACE
  | typeof SESSION
  | typeof DISPLAY_BLOCK
  | UnparsedObject;
export const TRACE = "trace";
export const EXPERIMENT_TRACE = "experiment_trace";
export const SESSION = "session";
export const DISPLAY_BLOCK = "display_block";
