import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of run for a Synthetic test result.
 */
export type SyntheticsTestResultRunType =
  | typeof SCHEDULED
  | typeof FAST
  | typeof CI
  | typeof TRIGGERED
  | UnparsedObject;
export const SCHEDULED = "scheduled";
export const FAST = "fast";
export const CI = "ci";
export const TRIGGERED = "triggered";
