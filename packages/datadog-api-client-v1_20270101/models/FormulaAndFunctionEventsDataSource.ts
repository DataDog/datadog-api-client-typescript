/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type FormulaAndFunctionEventsDataSource =
  | typeof EVENTS
  | typeof LOGS
  | typeof RUM
  | typeof SYNTHETICS_TEST_RUNS
  | typeof PRODUCT_ANALYTICS
  | typeof NETWORK
  | typeof PROFILES
  | typeof NETWORK_DEVICE_FLOWS
  | typeof RECOMMENDATIONS
  | typeof SECURITY_FINDINGS
  | typeof SECURITY_SIGNALS
  | typeof CI_PIPELINES
  | typeof DATABASE_QUERIES
  | typeof LLM_OBSERVABILITY
  | typeof AI_USAGE
  | typeof AUDIT
  | typeof CI_TESTS
  | typeof ERRORS
  | typeof SPANS
  | typeof SECURITY_RUNTIME
  | typeof APP_SEC_SPANS
  | typeof APP_SEC_ENTITIES
  | typeof BITS_AI_INVESTIGATIONS
  | typeof CI_CODE_SCAN
  | typeof CI_DEPENDENCIES
  | typeof CI_GATES
  | typeof CI_COVERAGE_REPORTS
  | typeof DATA_OBSERVABILITY_EVENTS
  | typeof DORA_METRICS
  | typeof COMPLIANCE_FINDINGS
  | typeof DEPLOYMENTS
  | typeof DEPLOYMENT_GATES
  | typeof EXPOSURES
  | typeof FLAG_EVALUATIONS
  | typeof NETWORK_PATH
  | typeof OBSERVABILITY_PIPELINES
  | typeof ON_CALL_EVENTS
  | typeof ORCHESTRATION_TROUBLESHOOTING
  | typeof SECURITY_HISTORICAL_RESULTS
  | typeof SECURITY_INFO
  | typeof SOFTWARE_INVENTORY
  | typeof SYNTHETICS_BATCHES
  | typeof SYNTHETICS_MAP
  | typeof REPLAY
  | typeof BEHAVIOR
  | UnparsedObject;
export const EVENTS = "events";
export const LOGS = "logs";
export const RUM = "rum";
export const SYNTHETICS_TEST_RUNS = "synthetics_test_runs";
export const PRODUCT_ANALYTICS = "product_analytics";
export const NETWORK = "network";
export const PROFILES = "profiles";
export const NETWORK_DEVICE_FLOWS = "network_device_flows";
export const RECOMMENDATIONS = "recommendations";
export const SECURITY_FINDINGS = "security_findings";
export const SECURITY_SIGNALS = "security_signals";
export const CI_PIPELINES = "ci_pipelines";
export const DATABASE_QUERIES = "database_queries";
export const LLM_OBSERVABILITY = "llm_observability";
export const AI_USAGE = "ai_usage";
export const AUDIT = "audit";
export const CI_TESTS = "ci_tests";
export const ERRORS = "errors";
export const SPANS = "spans";
export const SECURITY_RUNTIME = "security_runtime";
export const APP_SEC_SPANS = "app_sec_spans";
export const APP_SEC_ENTITIES = "app_sec_entities";
export const BITS_AI_INVESTIGATIONS = "bits_ai_investigations";
export const CI_CODE_SCAN = "ci_code_scan";
export const CI_DEPENDENCIES = "ci_dependencies";
export const CI_GATES = "ci_gates";
export const CI_COVERAGE_REPORTS = "ci_coverage_reports";
export const DATA_OBSERVABILITY_EVENTS = "data_observability_events";
export const DORA_METRICS = "dora_metrics";
export const COMPLIANCE_FINDINGS = "compliance_findings";
export const DEPLOYMENTS = "deployments";
export const DEPLOYMENT_GATES = "deployment_gates";
export const EXPOSURES = "exposures";
export const FLAG_EVALUATIONS = "flag_evaluations";
export const NETWORK_PATH = "network_path";
export const OBSERVABILITY_PIPELINES = "observability_pipelines";
export const ON_CALL_EVENTS = "on_call_events";
export const ORCHESTRATION_TROUBLESHOOTING = "orchestration_troubleshooting";
export const SECURITY_HISTORICAL_RESULTS = "security_historical_results";
export const SECURITY_INFO = "security_info";
export const SOFTWARE_INVENTORY = "software_inventory";
export const SYNTHETICS_BATCHES = "synthetics_batches";
export const SYNTHETICS_MAP = "synthetics_map";
export const REPLAY = "replay";
export const BEHAVIOR = "behavior";
