import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for security monitoring dataset objects.
 */
export type SecurityMonitoringDatasetType =
  | typeof SECURITY_MONITORING_DATASET
  | UnparsedObject;
export const SECURITY_MONITORING_DATASET = "security_monitoring_dataset";
