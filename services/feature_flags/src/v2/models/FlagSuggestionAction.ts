import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of change action for a suggestion.
 */
export type FlagSuggestionAction =
  | typeof CREATED
  | typeof UPDATED
  | typeof DELETED
  | typeof ARCHIVED
  | typeof UNARCHIVED
  | typeof STARTED
  | typeof STOPPED
  | typeof PAUSED
  | typeof UNPAUSED
  | UnparsedObject;
export const CREATED = "created";
export const UPDATED = "updated";
export const DELETED = "deleted";
export const ARCHIVED = "archived";
export const UNARCHIVED = "unarchived";
export const STARTED = "started";
export const STOPPED = "stopped";
export const PAUSED = "paused";
export const UNPAUSED = "unpaused";
