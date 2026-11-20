import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type AdvancedEventPlatformSource =
  | typeof EVENTS
  | typeof LOGS
  | typeof RUM
  | typeof SYNTHETICS_TEST_RUNS
  | typeof PRODUCT_ANALYTICS
  | typeof NETWORK
  | typeof NETWORK_DEVICE_FLOWS
  | typeof SECURITY_FINDINGS
  | typeof SECURITY_SIGNALS
  | typeof CI_PIPELINES
  | typeof DATABASE_QUERIES
  | typeof LLM_OBSERVABILITY
  | typeof AI_USAGE
  | typeof AUDIT
  | typeof CI_TESTS
  | typeof ERRORS
  | typeof MONITORS
  | typeof MONITOR_GROUPS
  | typeof SPANS
  | typeof SECURITY_RUNTIME
  | typeof SYNTHETICS_MATCHES
  | UnparsedObject;
export const EVENTS = "events";
export const LOGS = "logs";
export const RUM = "rum";
export const SYNTHETICS_TEST_RUNS = "synthetics_test_runs";
export const PRODUCT_ANALYTICS = "product_analytics";
export const NETWORK = "network";
export const NETWORK_DEVICE_FLOWS = "network_device_flows";
export const SECURITY_FINDINGS = "security_findings";
export const SECURITY_SIGNALS = "security_signals";
export const CI_PIPELINES = "ci_pipelines";
export const DATABASE_QUERIES = "database_queries";
export const LLM_OBSERVABILITY = "llm_observability";
export const AI_USAGE = "ai_usage";
export const AUDIT = "audit";
export const CI_TESTS = "ci_tests";
export const ERRORS = "errors";
export const MONITORS = "monitors";
export const MONITOR_GROUPS = "monitor_groups";
export const SPANS = "spans";
export const SECURITY_RUNTIME = "security_runtime";
export const SYNTHETICS_MATCHES = "synthetics_matches";
