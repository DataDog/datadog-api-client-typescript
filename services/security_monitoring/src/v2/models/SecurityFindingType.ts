import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of security finding that the automation rule applies to.
 */
export type SecurityFindingType =
  | typeof API_SECURITY
  | typeof ATTACK_PATH
  | typeof HOST_AND_CONTAINER_VULNERABILITY
  | typeof IAC_MISCONFIGURATION
  | typeof IDENTITY_RISK
  | typeof LIBRARY_VULNERABILITY
  | typeof MISCONFIGURATION
  | typeof RUNTIME_CODE_VULNERABILITY
  | typeof SECRET
  | typeof STATIC_CODE_VULNERABILITY
  | typeof WORKLOAD_ACTIVITY
  | UnparsedObject;
export const API_SECURITY = "api_security";
export const ATTACK_PATH = "attack_path";
export const HOST_AND_CONTAINER_VULNERABILITY =
  "host_and_container_vulnerability";
export const IAC_MISCONFIGURATION = "iac_misconfiguration";
export const IDENTITY_RISK = "identity_risk";
export const LIBRARY_VULNERABILITY = "library_vulnerability";
export const MISCONFIGURATION = "misconfiguration";
export const RUNTIME_CODE_VULNERABILITY = "runtime_code_vulnerability";
export const SECRET = "secret";
export const STATIC_CODE_VULNERABILITY = "static_code_vulnerability";
export const WORKLOAD_ACTIVITY = "workload_activity";
