import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the response.
 */
export type SpansAggregateResponseStatus =
  | typeof DONE
  | typeof TIMEOUT
  | UnparsedObject;
export const DONE = "done";
export const TIMEOUT = "timeout";
