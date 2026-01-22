import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Deprecated way of representing the case status, which only supports OPEN, IN_PROGRESS, and CLOSED statuses. Use `status_name` instead.
 */
export type CaseStatus =
  | typeof OPEN
  | typeof IN_PROGRESS
  | typeof CLOSED
  | UnparsedObject;
export const OPEN = "OPEN";
export const IN_PROGRESS = "IN_PROGRESS";
export const CLOSED = "CLOSED";
