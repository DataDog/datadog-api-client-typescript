import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Available connection types between organizations.
 */
export type OrgConnectionTypeEnum =
  | typeof LOGS
  | typeof METRICS
  | typeof AUDIT
  | typeof CI_PIPELINES
  | typeof CI_TESTS
  | UnparsedObject;
export const LOGS = "logs";
export const METRICS = "metrics";
export const AUDIT = "audit";
export const CI_PIPELINES = "ci_pipelines";
export const CI_TESTS = "ci_tests";
