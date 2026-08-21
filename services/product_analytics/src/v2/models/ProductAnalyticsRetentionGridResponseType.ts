import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a retention grid response.
 */
export type ProductAnalyticsRetentionGridResponseType =
  | typeof RETENTION_GRID_RESPONSE
  | UnparsedObject;
export const RETENTION_GRID_RESPONSE = "retention_grid_response";
