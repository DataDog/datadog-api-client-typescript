import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Synthetic test result summary resource, `result_summary`.
 */
export type SyntheticsTestResultSummaryType =
  | typeof RESULT_SUMMARY
  | UnparsedObject;
export const RESULT_SUMMARY = "result_summary";
