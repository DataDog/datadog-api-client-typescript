import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of RUM events the filter applies to. Read-only.
 */
export type RumPermanentRetentionFilterEventType =
  | typeof SESSION
  | typeof VIEW
  | typeof ACTION
  | typeof ERROR
  | typeof RESOURCE
  | typeof LONG_TASK
  | typeof VITAL
  | typeof OPERATION
  | UnparsedObject;
export const SESSION = "session";
export const VIEW = "view";
export const ACTION = "action";
export const ERROR = "error";
export const RESOURCE = "resource";
export const LONG_TASK = "long_task";
export const VITAL = "vital";
export const OPERATION = "operation";
