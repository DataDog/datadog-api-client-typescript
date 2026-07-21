import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a DDSQL tabular query request.
 */
export type DdsqlTabularQueryRequestType =
  | typeof DDSQL_QUERY_REQUEST
  | UnparsedObject;
export const DDSQL_QUERY_REQUEST = "ddsql_query_request";
