import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The aggregate CI check status for the pull request.
 */
export type PROutputCiStatus =
  | typeof PENDING
  | typeof FAILED
  | typeof SUCCESSFUL
  | UnparsedObject;
export const PENDING = "PENDING";
export const FAILED = "FAILED";
export const SUCCESSFUL = "SUCCESSFUL";
