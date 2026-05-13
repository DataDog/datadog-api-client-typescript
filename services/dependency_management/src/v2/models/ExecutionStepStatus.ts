import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current status of the step.
 */
export type ExecutionStepStatus =
  | typeof PENDING
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof CANCELED
  | UnparsedObject;
export const PENDING = "PENDING";
export const RUNNING = "RUNNING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
export const CANCELED = "CANCELED";
