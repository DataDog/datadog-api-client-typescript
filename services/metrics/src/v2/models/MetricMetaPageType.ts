import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of metric pagination.
 */
export type MetricMetaPageType = typeof CURSOR_LIMIT | UnparsedObject;
export const CURSOR_LIMIT = "cursor_limit";
