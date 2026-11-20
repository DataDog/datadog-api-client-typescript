/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type ContextMenuLinkLabel =
  | typeof EVENTS
  | typeof LOGS
  | typeof RUM
  | typeof PRODUCT_ANALYTICS
  | typeof NETWORK
  | typeof CLOUD_COST
  | typeof FUNCTIONS
  | typeof HOSTS
  | typeof TRACES
  | typeof PROFILES
  | typeof PROCESSES
  | typeof CONTAINERS
  | typeof CHANGE_TRACKING
  | typeof AUDIT_TRAIL
  | typeof NETWORK_DEVICE_FLOWS
  | typeof DEVICES
  | typeof RECOMMENDATIONS
  | typeof SECURITY_FINDINGS
  | typeof SECURITY_SIGNALS
  | typeof SECURITY_TRACES
  | typeof INCIDENTS
  | typeof CASES
  | typeof METRICS_SUMMARY
  | typeof PODS
  | typeof CI_PIPELINES
  | typeof DATABASE_QUERIES
  | typeof WATCH_SESSIONS
  | typeof GPU_MONITORING
  | typeof LLM_OBSERVABILITY
  | UnparsedObject;
export const EVENTS = "events";
export const LOGS = "logs";
export const RUM = "rum";
export const PRODUCT_ANALYTICS = "product_analytics";
export const NETWORK = "network";
export const CLOUD_COST = "cloud_cost";
export const FUNCTIONS = "functions";
export const HOSTS = "hosts";
export const TRACES = "traces";
export const PROFILES = "profiles";
export const PROCESSES = "processes";
export const CONTAINERS = "containers";
export const CHANGE_TRACKING = "change_tracking";
export const AUDIT_TRAIL = "audit_trail";
export const NETWORK_DEVICE_FLOWS = "network_device_flows";
export const DEVICES = "devices";
export const RECOMMENDATIONS = "recommendations";
export const SECURITY_FINDINGS = "security_findings";
export const SECURITY_SIGNALS = "security_signals";
export const SECURITY_TRACES = "security_traces";
export const INCIDENTS = "incidents";
export const CASES = "cases";
export const METRICS_SUMMARY = "metrics_summary";
export const PODS = "pods";
export const CI_PIPELINES = "ci_pipelines";
export const DATABASE_QUERIES = "database_queries";
export const WATCH_SESSIONS = "watch_sessions";
export const GPU_MONITORING = "gpu_monitoring";
export const LLM_OBSERVABILITY = "llm_observability";
