import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type IssueStreamColumnName =
  | typeof SERVICE
  | typeof COUNT
  | typeof VOLUME
  | typeof RESOURCES
  | typeof ERROR_TYPE
  | typeof ERROR_MESSAGE
  | typeof FILE_PATH
  | typeof LAST_SEEN
  | typeof FIRST_SEEN
  | typeof LANGUAGE
  | typeof PLATFORM
  | typeof DETAILS
  | typeof IMPACTED_SESSIONS
  | typeof IMPACTED_USERS
  | UnparsedObject;
export const SERVICE = "service";
export const COUNT = "count";
export const VOLUME = "volume";
export const RESOURCES = "resources";
export const ERROR_TYPE = "error_type";
export const ERROR_MESSAGE = "error_message";
export const FILE_PATH = "file_path";
export const LAST_SEEN = "last_seen";
export const FIRST_SEEN = "first_seen";
export const LANGUAGE = "language";
export const PLATFORM = "platform";
export const DETAILS = "details";
export const IMPACTED_SESSIONS = "impacted_sessions";
export const IMPACTED_USERS = "impacted_users";
