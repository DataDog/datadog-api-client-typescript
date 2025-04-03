import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current status of the downtime.
 */
export type DowntimeStatus =
  | typeof ACTIVE
  | typeof CANCELED
  | typeof ENDED
  | typeof SCHEDULED
  | UnparsedObject;
export const ACTIVE = "active";
export const CANCELED = "canceled";
export const ENDED = "ended";
export const SCHEDULED = "scheduled";
