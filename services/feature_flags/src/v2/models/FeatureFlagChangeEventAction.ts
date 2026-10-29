import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of change.
 */
export type FeatureFlagChangeEventAction =
  | typeof CREATED
  | typeof UPDATED
  | typeof DELETED
  | typeof ARCHIVED
  | typeof UNARCHIVED
  | typeof SCHEDULED
  | typeof STARTED
  | typeof PAUSED
  | typeof UNPAUSED
  | typeof STOPPED
  | UnparsedObject;
export const CREATED = "created";
export const UPDATED = "updated";
export const DELETED = "deleted";
export const ARCHIVED = "archived";
export const UNARCHIVED = "unarchived";
export const SCHEDULED = "scheduled";
export const STARTED = "started";
export const PAUSED = "paused";
export const UNPAUSED = "unpaused";
export const STOPPED = "stopped";
