import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for commit coverage summary request. The value must always be `ci_app_coverage_commit_summary_request`.
 */
export type CommitCoverageSummaryRequestType =
  | typeof CI_APP_COVERAGE_COMMIT_SUMMARY_REQUEST
  | UnparsedObject;
export const CI_APP_COVERAGE_COMMIT_SUMMARY_REQUEST =
  "ci_app_coverage_commit_summary_request";
