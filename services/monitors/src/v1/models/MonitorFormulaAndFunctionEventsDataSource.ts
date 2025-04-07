import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for event platform-based queries.
 */
export type MonitorFormulaAndFunctionEventsDataSource =
  | typeof RUM
  | typeof CI_PIPELINES
  | typeof CI_TESTS
  | typeof AUDIT
  | typeof EVENTS
  | typeof LOGS
  | typeof SPANS
  | typeof DATABASE_QUERIES
  | typeof NETWORK
  | UnparsedObject;
export const RUM = "rum";
export const CI_PIPELINES = "ci_pipelines";
export const CI_TESTS = "ci_tests";
export const AUDIT = "audit";
export const EVENTS = "events";
export const LOGS = "logs";
export const SPANS = "spans";
export const DATABASE_QUERIES = "database_queries";
export const NETWORK = "network";
