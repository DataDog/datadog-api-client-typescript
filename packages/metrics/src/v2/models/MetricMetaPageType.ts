import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of metric pagination.
 */
export type MetricMetaPageType = typeof CURSOR_LIMIT | UnparsedObject;
export const CURSOR_LIMIT = "cursor_limit";
