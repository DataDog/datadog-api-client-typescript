import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the SLO report job.
 */
export type SLOReportStatus =
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof COMPLETED_WITH_ERRORS
  | typeof FAILED
  | UnparsedObject;
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const COMPLETED_WITH_ERRORS = "completed_with_errors";
export const FAILED = "failed";
