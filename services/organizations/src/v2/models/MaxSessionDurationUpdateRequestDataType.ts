import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the resource.
 */
export type MaxSessionDurationUpdateRequestDataType =
  | typeof MAX_SESSION_DURATION
  | UnparsedObject;
export const MAX_SESSION_DURATION = "max_session_duration";
