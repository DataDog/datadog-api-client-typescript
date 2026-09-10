import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for files coverage response. The value must always be `ci_app_coverage_files`.
 */
export type FilesCoverageResponseType =
  | typeof CI_APP_COVERAGE_FILES
  | UnparsedObject;
export const CI_APP_COVERAGE_FILES = "ci_app_coverage_files";
