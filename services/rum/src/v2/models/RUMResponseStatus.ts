import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the response. `timeout` means the query did not complete in time and the results are partial.
 */
export type RUMResponseStatus = typeof DONE | typeof TIMEOUT | UnparsedObject;
export const DONE = "done";
export const TIMEOUT = "timeout";
