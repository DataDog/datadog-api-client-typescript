import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Plan status.
 */
export type RemediationPlanStatus =
  | typeof PENDING
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const PENDING = "pending";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const FAILED = "failed";
