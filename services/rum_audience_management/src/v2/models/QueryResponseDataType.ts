import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Query response resource type.
 */
export type QueryResponseDataType = typeof QUERY_RESPONSE | UnparsedObject;
export const QUERY_RESPONSE = "query_response";
