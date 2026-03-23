import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The execution status of a Product Analytics query.
 */
export type ProductAnalyticsResponseMetaStatus =
  | typeof DONE
  | typeof RUNNING
  | typeof TIMEOUT
  | UnparsedObject;
export const DONE = "done";
export const RUNNING = "running";
export const TIMEOUT = "timeout";
