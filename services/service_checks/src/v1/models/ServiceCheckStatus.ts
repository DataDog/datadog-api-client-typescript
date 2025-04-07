import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a service check. Set to `0` for OK, `1` for warning, `2` for critical, and `3` for unknown.
 */
export type ServiceCheckStatus =
  | typeof OK
  | typeof WARNING
  | typeof CRITICAL
  | typeof UNKNOWN
  | UnparsedObject;
export const OK = 0;
export const WARNING = 1;
export const CRITICAL = 2;
export const UNKNOWN = 3;
