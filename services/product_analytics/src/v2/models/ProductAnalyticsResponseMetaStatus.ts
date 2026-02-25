import { UnparsedObject } from "@datadog/datadog-api-client";
export type ProductAnalyticsResponseMetaStatus =
  | typeof DONE
  | typeof RUNNING
  | typeof TIMEOUT
  | UnparsedObject;
export const DONE = "done";
export const RUNNING = "running";
export const TIMEOUT = "timeout";
