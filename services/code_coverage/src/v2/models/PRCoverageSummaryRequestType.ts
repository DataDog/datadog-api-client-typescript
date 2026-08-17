import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for PR coverage summary request. The value must always be `ci_app_coverage_pr_summary_request`.
 */
export type PRCoverageSummaryRequestType =
  | typeof CI_APP_COVERAGE_PR_SUMMARY_REQUEST
  | UnparsedObject;
export const CI_APP_COVERAGE_PR_SUMMARY_REQUEST =
  "ci_app_coverage_pr_summary_request";
