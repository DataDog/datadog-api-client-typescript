import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssueSampleType =
  | typeof ERROR_TRACKING_ISSUE_SAMPLE
  | UnparsedObject;
export const ERROR_TRACKING_ISSUE_SAMPLE = "error_tracking_issue_sample";
