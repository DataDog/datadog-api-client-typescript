import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reason a signal is archived.
 */
export type SecurityMonitoringSignalArchiveReason =
  | typeof NONE
  | typeof FALSE_POSITIVE
  | typeof TESTING_OR_MAINTENANCE
  | typeof INVESTIGATED_CASE_OPENED
  | typeof OTHER
  | UnparsedObject;
export const NONE = "none";
export const FALSE_POSITIVE = "false_positive";
export const TESTING_OR_MAINTENANCE = "testing_or_maintenance";
export const INVESTIGATED_CASE_OPENED = "investigated_case_opened";
export const OTHER = "other";
