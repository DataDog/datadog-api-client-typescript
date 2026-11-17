import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Widget sorting methods.
 */
export type WidgetSort = typeof ASCENDING | typeof DESCENDING | UnparsedObject;
export const ASCENDING = "asc";
export const DESCENDING = "desc";
