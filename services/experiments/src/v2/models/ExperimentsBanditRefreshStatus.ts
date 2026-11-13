import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the refresh.
 */
export type ExperimentsBanditRefreshStatus =
  | typeof PENDING
  | typeof RUNNING
  | typeof SUCCEEDED
  | typeof FAILED
  | typeof CANCELLED
  | UnparsedObject;
export const PENDING = "PENDING";
export const RUNNING = "RUNNING";
export const SUCCEEDED = "SUCCEEDED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
