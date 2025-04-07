import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reason why a signal has been archived.
 */
export type SignalArchiveReason =
  | typeof NONE
  | typeof FALSE_POSITIVE
  | typeof TESTING_OR_MAINTENANCE
  | typeof INVESTIGATED_CASE_OPENED
  | typeof TRUE_POSITIVE_BENIGN
  | typeof TRUE_POSITIVE_MALICIOUS
  | typeof OTHER
  | UnparsedObject;
export const NONE = "none";
export const FALSE_POSITIVE = "false_positive";
export const TESTING_OR_MAINTENANCE = "testing_or_maintenance";
export const INVESTIGATED_CASE_OPENED = "investigated_case_opened";
export const TRUE_POSITIVE_BENIGN = "true_positive_benign";
export const TRUE_POSITIVE_MALICIOUS = "true_positive_malicious";
export const OTHER = "other";
