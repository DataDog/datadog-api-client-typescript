import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status of a Synthetic test result.
 */
export type SyntheticsTestResultStatus =
  | typeof PASSED
  | typeof FAILED
  | typeof NO_DATA
  | UnparsedObject;
export const PASSED = "passed";
export const FAILED = "failed";
export const NO_DATA = "no_data";
