import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The new triage state of the signal.
 */
export type SecurityMonitoringSignalState =
  | typeof OPEN
  | typeof ARCHIVED
  | typeof UNDER_REVIEW
  | UnparsedObject;
export const OPEN = "open";
export const ARCHIVED = "archived";
export const UNDER_REVIEW = "under_review";
