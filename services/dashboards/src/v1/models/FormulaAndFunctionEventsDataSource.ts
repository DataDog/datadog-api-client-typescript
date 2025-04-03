import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for event platform-based queries.
 */
export type FormulaAndFunctionEventsDataSource =
  | typeof LOGS
  | typeof SPANS
  | typeof NETWORK
  | typeof RUM
  | typeof SECURITY_SIGNALS
  | typeof PROFILES
  | typeof AUDIT
  | typeof EVENTS
  | typeof CI_TESTS
  | typeof CI_PIPELINES
  | typeof INCIDENT_ANALYTICS
  | UnparsedObject;
export const LOGS = "logs";
export const SPANS = "spans";
export const NETWORK = "network";
export const RUM = "rum";
export const SECURITY_SIGNALS = "security_signals";
export const PROFILES = "profiles";
export const AUDIT = "audit";
export const EVENTS = "events";
export const CI_TESTS = "ci_tests";
export const CI_PIPELINES = "ci_pipelines";
export const INCIDENT_ANALYTICS = "incident_analytics";
