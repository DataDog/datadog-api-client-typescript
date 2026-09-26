import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source from which to query items to display in the stream. apm_issue_stream, rum_issue_stream, and logs_issue_stream are deprecated. Use issue_stream instead. apm_recommendations_stream is used to query APM recommendations, and supports filtering by environment, services, teams, recommendation types, and status.
 */
export type ListStreamSource =
  | typeof LOGS_STREAM
  | typeof AUDIT_STREAM
  | typeof CI_PIPELINE_STREAM
  | typeof CI_TEST_STREAM
  | typeof RUM_ISSUE_STREAM
  | typeof APM_ISSUE_STREAM
  | typeof TRACE_STREAM
  | typeof LOGS_ISSUE_STREAM
  | typeof LOGS_PATTERN_STREAM
  | typeof LOGS_TRANSACTION_STREAM
  | typeof EVENT_STREAM
  | typeof RUM_STREAM
  | typeof LLM_OBSERVABILITY_STREAM
  | typeof ISSUE_STREAM
  | typeof SECURITY_RUNTIME_STREAM
  | typeof SECURITY_SIGNALS_STREAM
  | typeof INCIDENTS_STREAM
  | typeof APM_RECOMMENDATIONS_STREAM
  | UnparsedObject;
export const LOGS_STREAM = "logs_stream";
export const AUDIT_STREAM = "audit_stream";
export const CI_PIPELINE_STREAM = "ci_pipeline_stream";
export const CI_TEST_STREAM = "ci_test_stream";
export const RUM_ISSUE_STREAM = "rum_issue_stream";
export const APM_ISSUE_STREAM = "apm_issue_stream";
export const TRACE_STREAM = "trace_stream";
export const LOGS_ISSUE_STREAM = "logs_issue_stream";
export const LOGS_PATTERN_STREAM = "logs_pattern_stream";
export const LOGS_TRANSACTION_STREAM = "logs_transaction_stream";
export const EVENT_STREAM = "event_stream";
export const RUM_STREAM = "rum_stream";
export const LLM_OBSERVABILITY_STREAM = "llm_observability_stream";
export const ISSUE_STREAM = "issue_stream";
export const SECURITY_RUNTIME_STREAM = "security_runtime_stream";
export const SECURITY_SIGNALS_STREAM = "security_signals_stream";
export const INCIDENTS_STREAM = "incidents_stream";
export const APM_RECOMMENDATIONS_STREAM = "apm_recommendations_stream";
