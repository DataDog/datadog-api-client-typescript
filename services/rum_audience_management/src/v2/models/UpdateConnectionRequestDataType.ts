import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Connection id resource type.
 */
export type UpdateConnectionRequestDataType =
  | typeof CONNECTION_ID
  | UnparsedObject;
export const CONNECTION_ID = "connection_id";
