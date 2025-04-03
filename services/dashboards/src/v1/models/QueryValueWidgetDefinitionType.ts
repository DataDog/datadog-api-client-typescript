import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the query value widget.
 */
export type QueryValueWidgetDefinitionType =
  | typeof QUERY_VALUE
  | UnparsedObject;
export const QUERY_VALUE = "query_value";
