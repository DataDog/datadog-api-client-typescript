import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status group of the case.
 */
export type CaseStatusGroup =
  | typeof SG_OPEN
  | typeof SG_IN_PROGRESS
  | typeof SG_CLOSED
  | UnparsedObject;
export const SG_OPEN = "SG_OPEN";
export const SG_IN_PROGRESS = "SG_IN_PROGRESS";
export const SG_CLOSED = "SG_CLOSED";
