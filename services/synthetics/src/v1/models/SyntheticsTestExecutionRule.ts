import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Execution rule for a Synthetic test.
 */
export type SyntheticsTestExecutionRule =
  | typeof BLOCKING
  | typeof NON_BLOCKING
  | typeof SKIPPED
  | UnparsedObject;
export const BLOCKING = "blocking";
export const NON_BLOCKING = "non_blocking";
export const SKIPPED = "skipped";
