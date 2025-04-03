import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The state of the archive.
 */
export type LogsArchiveState =
  | typeof UNKNOWN
  | typeof WORKING
  | typeof FAILING
  | typeof WORKING_AUTH_LEGACY
  | UnparsedObject;
export const UNKNOWN = "UNKNOWN";
export const WORKING = "WORKING";
export const FAILING = "FAILING";
export const WORKING_AUTH_LEGACY = "WORKING_AUTH_LEGACY";
