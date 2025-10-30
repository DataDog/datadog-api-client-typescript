import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Query account request resource type.
 */
export type QueryAccountRequestDataType =
  | typeof QUERY_ACCOUNT_REQUEST
  | UnparsedObject;
export const QUERY_ACCOUNT_REQUEST = "query_account_request";
