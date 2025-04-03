import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of RUM events to filter on.
 */
export type RumRetentionFilterEventType =
  | typeof SESSION
  | typeof VIEW
  | typeof ACTION
  | typeof ERROR
  | typeof RESOURCE
  | typeof LONG_TASK
  | typeof VITAL
  | UnparsedObject;
export const SESSION = "session";
export const VIEW = "view";
export const ACTION = "action";
export const ERROR = "error";
export const RESOURCE = "resource";
export const LONG_TASK = "long_task";
export const VITAL = "vital";
