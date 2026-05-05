import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a bulk delete request.
 */
export type SecurityMonitoringRuleBulkDeleteRequestDataType =
  | typeof BULK_DELETE_RULES
  | UnparsedObject;
export const BULK_DELETE_RULES = "bulk_delete_rules";
