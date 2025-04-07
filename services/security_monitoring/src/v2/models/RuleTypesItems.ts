import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Security rule type which can be used in security rules.
 * Signal-based notification rules can filter signals based on rule types application_security, log_detection,
 * workload_security, signal_correlation, cloud_configuration and infrastructure_configuration.
 * Vulnerability-based notification rules can filter vulnerabilities based on rule types application_code_vulnerability,
 * application_library_vulnerability, attack_path, container_image_vulnerability, identity_risk, misconfiguration, and api_security.
 */
export type RuleTypesItems =
  | typeof APPLICATION_SECURITY
  | typeof LOG_DETECTION
  | typeof WORKLOAD_SECURITY
  | typeof SIGNAL_CORRELATION
  | typeof CLOUD_CONFIGURATION
  | typeof INFRASTRUCTURE_CONFIGURATION
  | typeof APPLICATION_CODE_VULNERABILITY
  | typeof APPLICATION_LIBRARY_VULNERABILITY
  | typeof ATTACK_PATH
  | typeof CONTAINER_IMAGE_VULNERABILITY
  | typeof IDENTITY_RISK
  | typeof MISCONFIGURATION
  | typeof API_SECURITY
  | UnparsedObject;
export const APPLICATION_SECURITY = "application_security";
export const LOG_DETECTION = "log_detection";
export const WORKLOAD_SECURITY = "workload_security";
export const SIGNAL_CORRELATION = "signal_correlation";
export const CLOUD_CONFIGURATION = "cloud_configuration";
export const INFRASTRUCTURE_CONFIGURATION = "infrastructure_configuration";
export const APPLICATION_CODE_VULNERABILITY = "application_code_vulnerability";
export const APPLICATION_LIBRARY_VULNERABILITY =
  "application_library_vulnerability";
export const ATTACK_PATH = "attack_path";
export const CONTAINER_IMAGE_VULNERABILITY = "container_image_vulnerability";
export const IDENTITY_RISK = "identity_risk";
export const MISCONFIGURATION = "misconfiguration";
export const API_SECURITY = "api_security";
