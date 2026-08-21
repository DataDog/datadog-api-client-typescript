import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a retention grid request.
 */
export type ProductAnalyticsRetentionGridRequestType =
  | typeof RETENTION_GRID_REQUEST
  | UnparsedObject;
export const RETENTION_GRID_REQUEST = "retention_grid_request";
