import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the object.
 */
export type IssueImpactType =
  | typeof ERROR_TRACKING_ISSUE_IMPACT
  | UnparsedObject;
export const ERROR_TRACKING_ISSUE_IMPACT = "error_tracking_issue_impact";
