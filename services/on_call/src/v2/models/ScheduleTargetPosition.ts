import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the position of a schedule target (example `previous`, `current`, or `next`).
 */
export type ScheduleTargetPosition =
  | typeof PREVIOUS
  | typeof CURRENT
  | typeof NEXT
  | UnparsedObject;
export const PREVIOUS = "previous";
export const CURRENT = "current";
export const NEXT = "next";
