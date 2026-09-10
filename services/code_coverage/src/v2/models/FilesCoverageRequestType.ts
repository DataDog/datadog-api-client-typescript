import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for files coverage request. The value must always be `ci_app_coverage_files_request`.
 */
export type FilesCoverageRequestType =
  | typeof CI_APP_COVERAGE_FILES_REQUEST
  | UnparsedObject;
export const CI_APP_COVERAGE_FILES_REQUEST = "ci_app_coverage_files_request";
