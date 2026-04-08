import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of events, either logs, audit trail, security signals, or Datadog events. `app_sec_spans` is deprecated in favor of `spans`.
 */
export type SecurityMonitoringStandardDataSource =
  | typeof LOGS
  | typeof AUDIT
  | typeof APP_SEC_SPANS
  | typeof SPANS
  | typeof SECURITY_RUNTIME
  | typeof NETWORK
  | typeof EVENTS
  | typeof SECURITY_SIGNALS
  | UnparsedObject;
export const LOGS = "logs";
export const AUDIT = "audit";
export const APP_SEC_SPANS = "app_sec_spans";
export const SPANS = "spans";
export const SECURITY_RUNTIME = "security_runtime";
export const NETWORK = "network";
export const EVENTS = "events";
export const SECURITY_SIGNALS = "security_signals";
