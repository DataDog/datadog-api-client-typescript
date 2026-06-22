import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Investigation status.
 */
export type RemediationInvestigationStatus =
  | typeof OPEN
  | typeof APPROVAL_REQUIRED
  | typeof EXECUTING
  | typeof SUCCEEDED
  | typeof FAILED
  | UnparsedObject;
export const OPEN = "open";
export const APPROVAL_REQUIRED = "approval_required";
export const EXECUTING = "executing";
export const SUCCEEDED = "succeeded";
export const FAILED = "failed";
