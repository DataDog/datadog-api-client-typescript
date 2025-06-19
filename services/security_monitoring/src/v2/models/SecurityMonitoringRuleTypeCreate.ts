import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rule type.
 */
export type SecurityMonitoringRuleTypeCreate =
  | typeof API_SECURITY
  | typeof APPLICATION_SECURITY
  | typeof LOG_DETECTION
  | typeof WORKLOAD_SECURITY
  | UnparsedObject;
export const API_SECURITY = "api_security";
export const APPLICATION_SECURITY = "application_security";
export const LOG_DETECTION = "log_detection";
export const WORKLOAD_SECURITY = "workload_security";
