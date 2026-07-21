import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Lifecycle state of a DDSQL tabular query response.
 * `running` means the query is still executing and the client should poll
 * the fetch endpoint with the returned `query_id`. `completed` means the
 * result set is inlined in `columns` and no further polling is required.
 */
export type DdsqlTabularQueryState =
  | typeof RUNNING
  | typeof COMPLETED
  | UnparsedObject;
export const RUNNING = "running";
export const COMPLETED = "completed";
