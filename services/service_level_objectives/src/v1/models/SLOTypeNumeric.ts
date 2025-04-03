import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A numeric representation of the type of the service level objective (`0` for
 * monitor, `1` for metric). Always included in service level objective responses.
 * Ignored in create/update requests.
 */
export type SLOTypeNumeric =
  | typeof MONITOR
  | typeof METRIC
  | typeof TIME_SLICE
  | UnparsedObject;
export const MONITOR = 0;
export const METRIC = 1;
export const TIME_SLICE = 2;
