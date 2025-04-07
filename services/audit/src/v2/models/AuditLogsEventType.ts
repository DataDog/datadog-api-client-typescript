import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the event.
 */
export type AuditLogsEventType = typeof Audit | UnparsedObject;
export const Audit = "audit";
