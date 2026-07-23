import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for audit trail content pack details.
 */
export type SecurityMonitoringContentPackAuditDetailsType =
  | typeof AUDIT
  | UnparsedObject;
export const AUDIT = "audit";
