import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Determines whether the batch has passed, failed, or is in progress.
 */
export type SyntheticsBatchStatus =
  | typeof PASSED
  | typeof SKIPPED
  | typeof FAILED
  | UnparsedObject;
export const PASSED = "passed";
export const SKIPPED = "skipped";
export const FAILED = "failed";
