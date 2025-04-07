import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Source of events, either logs or audit trail.
 */
export type SecurityMonitoringStandardDataSource =
  | typeof LOGS
  | typeof AUDIT
  | typeof APP_SEC_SPANS
  | typeof SPANS
  | typeof SECURITY_RUNTIME
  | typeof NETWORK
  | UnparsedObject;
export const LOGS = "logs";
export const AUDIT = "audit";
export const APP_SEC_SPANS = "app_sec_spans";
export const SPANS = "spans";
export const SECURITY_RUNTIME = "security_runtime";
export const NETWORK = "network";
