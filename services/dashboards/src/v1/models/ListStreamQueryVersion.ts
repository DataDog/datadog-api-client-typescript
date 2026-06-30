import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Version of the query for the logs transaction stream widget. When omitted, v1 query behavior is
 * preserved. Set to `sequential_query` to use v2 behavior. **This feature is in Preview.**
 */
export type ListStreamQueryVersion = typeof SEQUENTIAL_QUERY | UnparsedObject;
export const SEQUENTIAL_QUERY = "sequential_query";
