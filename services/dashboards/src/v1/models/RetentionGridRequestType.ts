import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for retention grid widget.
 */
export type RetentionGridRequestType = typeof RETENTION_GRID | UnparsedObject;
export const RETENTION_GRID = "retention_grid";
