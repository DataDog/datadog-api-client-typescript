import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The status of the response.
 */
export type CIAppResponseStatus = typeof DONE | typeof TIMEOUT | UnparsedObject;
export const DONE = "done";
export const TIMEOUT = "timeout";
