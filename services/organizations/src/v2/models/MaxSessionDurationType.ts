import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data type of a maximum session duration update.
 */
export type MaxSessionDurationType =
  | typeof MAX_SESSION_DURATION
  | UnparsedObject;
export const MAX_SESSION_DURATION = "max_session_duration";
