import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for coverage summary response. The value must always be `ci_app_coverage_summary`.
 */
export type CoverageSummaryType =
  | typeof CI_APP_COVERAGE_SUMMARY
  | UnparsedObject;
export const CI_APP_COVERAGE_SUMMARY = "ci_app_coverage_summary";
