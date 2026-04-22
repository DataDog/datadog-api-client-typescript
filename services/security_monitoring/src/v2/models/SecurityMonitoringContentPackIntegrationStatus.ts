import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The installation status of the related integration
 */
export type SecurityMonitoringContentPackIntegrationStatus =
  | typeof INSTALLED
  | typeof AVAILABLE
  | typeof PARTIALLY_INSTALLED
  | typeof DETECTED
  | typeof ERROR
  | UnparsedObject;
export const INSTALLED = "installed";
export const AVAILABLE = "available";
export const PARTIALLY_INSTALLED = "partially_installed";
export const DETECTED = "detected";
export const ERROR = "error";
