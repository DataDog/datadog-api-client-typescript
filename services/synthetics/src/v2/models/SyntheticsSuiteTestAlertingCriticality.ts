import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Alerting criticality for each the test.
 */
export type SyntheticsSuiteTestAlertingCriticality =
  | typeof IGNORE
  | typeof CRITICAL
  | UnparsedObject;
export const IGNORE = "ignore";
export const CRITICAL = "critical";
