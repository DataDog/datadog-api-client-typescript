import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a Model Lab run.
 */
export type ModelLabRunStatus =
  | typeof PENDING
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof KILLED
  | typeof UNRESPONSIVE
  | typeof PAUSED
  | UnparsedObject;
export const PENDING = "pending";
export const RUNNING = "running";
export const COMPLETED = "completed";
export const FAILED = "failed";
export const KILLED = "killed";
export const UNRESPONSIVE = "unresponsive";
export const PAUSED = "paused";
