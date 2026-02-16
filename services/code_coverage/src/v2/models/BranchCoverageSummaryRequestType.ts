import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for branch coverage summary request. The value must always be `ci_app_coverage_branch_summary_request`.
 */
export type BranchCoverageSummaryRequestType =
  | typeof CI_APP_COVERAGE_BRANCH_SUMMARY_REQUEST
  | UnparsedObject;
export const CI_APP_COVERAGE_BRANCH_SUMMARY_REQUEST =
  "ci_app_coverage_branch_summary_request";
