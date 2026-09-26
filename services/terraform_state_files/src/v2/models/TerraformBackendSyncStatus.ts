import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Most recent synchronization outcome, or pending if no outcome has been recorded.
 */
export type TerraformBackendSyncStatus =
  | typeof PENDING
  | typeof SUCCESS
  | typeof FAILURE
  | UnparsedObject;
export const PENDING = "pending";
export const SUCCESS = "success";
export const FAILURE = "failure";
