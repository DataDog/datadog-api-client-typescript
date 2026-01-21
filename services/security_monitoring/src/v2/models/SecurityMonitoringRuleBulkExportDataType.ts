import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource.
 */
export type SecurityMonitoringRuleBulkExportDataType =
  | typeof SECURITY_MONITORING_RULES_BULK_EXPORT
  | UnparsedObject;
export const SECURITY_MONITORING_RULES_BULK_EXPORT =
  "security_monitoring_rules_bulk_export";
