import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case status
 */
export type CaseStatus =
  | typeof OPEN
  | typeof IN_PROGRESS
  | typeof CLOSED
  | UnparsedObject;
export const OPEN = "OPEN";
export const IN_PROGRESS = "IN_PROGRESS";
export const CLOSED = "CLOSED";
