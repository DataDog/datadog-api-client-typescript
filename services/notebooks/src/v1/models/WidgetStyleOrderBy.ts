import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How to order series in timeseries visualizations.
 * - `tags`: Order series alphabetically by tag name (default behavior)
 * - `values`: Order series by their current metric values (typically descending)
 */
export type WidgetStyleOrderBy = typeof TAGS | typeof VALUES | UnparsedObject;
export const TAGS = "tags";
export const VALUES = "values";
