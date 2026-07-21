import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a DDSQL tabular query fetch request.
 */
export type DdsqlTabularQueryFetchRequestType =
  | typeof DDSQL_QUERY_FETCH_REQUEST
  | UnparsedObject;
export const DDSQL_QUERY_FETCH_REQUEST = "ddsql_query_fetch_request";
