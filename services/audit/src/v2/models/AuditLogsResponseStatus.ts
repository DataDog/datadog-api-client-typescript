import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the response.
 */
export type AuditLogsResponseStatus =
  | typeof DONE
  | typeof TIMEOUT
  | UnparsedObject;
export const DONE = "done";
export const TIMEOUT = "timeout";
