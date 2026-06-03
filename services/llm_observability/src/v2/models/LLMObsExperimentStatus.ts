import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Execution status of an LLM Observability experiment.
 */
export type LLMObsExperimentStatus =
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof INTERRUPTED
  | UnparsedObject;
export const RUNNING = "running";
export const COMPLETED = "completed";
export const FAILED = "failed";
export const INTERRUPTED = "interrupted";
