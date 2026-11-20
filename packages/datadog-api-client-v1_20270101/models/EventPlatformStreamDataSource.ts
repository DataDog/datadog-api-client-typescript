/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type EventPlatformStreamDataSource =
  | typeof LOGS_STREAM
  | typeof AUDIT_STREAM
  | typeof TRACE_STREAM
  | typeof ERRORS_STREAM
  | typeof EVENT_STREAM
  | typeof RUM_STREAM
  | typeof CI_PIPELINE_STREAM
  | typeof CI_TEST_STREAM
  | typeof CI_GATE_STREAM
  | typeof CI_CODE_SCAN_STREAM
  | typeof CI_DEPENDENCY_STREAM
  | typeof DEPLOYMENT_STREAM
  | typeof RECOMMENDATIONS_STREAM
  | typeof SYNTHETICS_BATCH_STREAM
  | typeof SYNTHETICS_TEST_RUNS_STREAM
  | typeof OBSERVABILITY_PIPELINES_STREAM
  | typeof SECURITY_RUNTIME_STREAM
  | typeof SECURITY_SIGNALS_STREAM
  | typeof PRODUCT_ANALYTICS_STREAM
  | typeof APP_SEC_SPAN_STREAM
  | typeof APP_SEC_ENTITIES_STREAM
  | typeof COMPLIANCE_EVENT_STREAM
  | typeof COMPLIANCE_FINDINGS_STREAM
  | typeof SECURITY_FINDINGS_STREAM
  | typeof SUPPLY_CHAIN_FIREWALL_REPORT_STREAM
  | typeof DATA_OBSERVABILITY_STREAM
  | typeof DATABASE_QUERY_STREAM
  | typeof DATABASE_RAW_QUERY_STREAM
  | typeof DEPLOYMENT_GATES_STREAM
  | typeof LLM_OBSERVABILITY_STREAM
  | typeof NETWORK_DEVICE_FLOW_STREAM
  | typeof NETWORK_FLOW_STREAM
  | typeof NETWORK_PATH_STREAM
  | typeof ON_CALL_EVENTS_STREAM
  | typeof PROFILE_STREAM
  | typeof SECURITY_DUMP_STREAM
  | typeof SECURITY_HISTORICAL_RESULTS_STREAM
  | typeof SESSION_REPLAY_STREAM
  | typeof SOFTWARE_INVENTORY_STREAM
  | typeof CRITICAL_ASSET_STREAM
  | UnparsedObject;
export const LOGS_STREAM = "logs_stream";
export const AUDIT_STREAM = "audit_stream";
export const TRACE_STREAM = "trace_stream";
export const ERRORS_STREAM = "errors_stream";
export const EVENT_STREAM = "event_stream";
export const RUM_STREAM = "rum_stream";
export const CI_PIPELINE_STREAM = "ci_pipeline_stream";
export const CI_TEST_STREAM = "ci_test_stream";
export const CI_GATE_STREAM = "ci_gate_stream";
export const CI_CODE_SCAN_STREAM = "ci_code_scan_stream";
export const CI_DEPENDENCY_STREAM = "ci_dependency_stream";
export const DEPLOYMENT_STREAM = "deployment_stream";
export const RECOMMENDATIONS_STREAM = "recommendations_stream";
export const SYNTHETICS_BATCH_STREAM = "synthetics_batch_stream";
export const SYNTHETICS_TEST_RUNS_STREAM = "synthetics_test_runs_stream";
export const OBSERVABILITY_PIPELINES_STREAM = "observability_pipelines_stream";
export const SECURITY_RUNTIME_STREAM = "security_runtime_stream";
export const SECURITY_SIGNALS_STREAM = "security_signals_stream";
export const PRODUCT_ANALYTICS_STREAM = "product_analytics_stream";
export const APP_SEC_SPAN_STREAM = "app_sec_span_stream";
export const APP_SEC_ENTITIES_STREAM = "app_sec_entities_stream";
export const COMPLIANCE_EVENT_STREAM = "compliance_event_stream";
export const COMPLIANCE_FINDINGS_STREAM = "compliance_findings_stream";
export const SECURITY_FINDINGS_STREAM = "security_findings_stream";
export const SUPPLY_CHAIN_FIREWALL_REPORT_STREAM =
  "supply_chain_firewall_report_stream";
export const DATA_OBSERVABILITY_STREAM = "data_observability_stream";
export const DATABASE_QUERY_STREAM = "database_query_stream";
export const DATABASE_RAW_QUERY_STREAM = "database_raw_query_stream";
export const DEPLOYMENT_GATES_STREAM = "deployment_gates_stream";
export const LLM_OBSERVABILITY_STREAM = "llm_observability_stream";
export const NETWORK_DEVICE_FLOW_STREAM = "network_device_flow_stream";
export const NETWORK_FLOW_STREAM = "network_flow_stream";
export const NETWORK_PATH_STREAM = "network_path_stream";
export const ON_CALL_EVENTS_STREAM = "on_call_events_stream";
export const PROFILE_STREAM = "profile_stream";
export const SECURITY_DUMP_STREAM = "security_dump_stream";
export const SECURITY_HISTORICAL_RESULTS_STREAM =
  "security_historical_results_stream";
export const SESSION_REPLAY_STREAM = "session_replay_stream";
export const SOFTWARE_INVENTORY_STREAM = "software_inventory_stream";
export const CRITICAL_ASSET_STREAM = "critical_asset_stream";
