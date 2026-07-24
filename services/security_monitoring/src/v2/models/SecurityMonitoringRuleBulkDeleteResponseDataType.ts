import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a bulk delete response.
 */
export type SecurityMonitoringRuleBulkDeleteResponseDataType =
  | typeof BULK_DELETE_RESPONSE
  | UnparsedObject;
export const BULK_DELETE_RESPONSE = "bulk_delete_response";
