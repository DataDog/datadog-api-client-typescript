import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reason for muting a security finding.
 */
export type MuteReason =
  | typeof DUPLICATE
  | typeof FALSE_POSITIVE
  | typeof NO_FIX
  | typeof OTHER
  | typeof PENDING_FIX
  | typeof RISK_ACCEPTED
  | UnparsedObject;
export const DUPLICATE = "duplicate";
export const FALSE_POSITIVE = "false_positive";
export const NO_FIX = "no_fix";
export const OTHER = "other";
export const PENDING_FIX = "pending_fix";
export const RISK_ACCEPTED = "risk_accepted";
