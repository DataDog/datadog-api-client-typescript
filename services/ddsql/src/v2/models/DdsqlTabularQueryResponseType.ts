import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a DDSQL tabular query response.
 */
export type DdsqlTabularQueryResponseType =
  | typeof DDSQL_QUERY_RESPONSE
  | UnparsedObject;
export const DDSQL_QUERY_RESPONSE = "ddsql_query_response";
