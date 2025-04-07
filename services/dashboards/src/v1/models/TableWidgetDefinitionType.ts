import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the table widget.
 */
export type TableWidgetDefinitionType = typeof QUERY_TABLE | UnparsedObject;
export const QUERY_TABLE = "query_table";
