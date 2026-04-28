import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reason why the findings are muted or unmuted.
 */
export type MuteFindingsReason =
  | typeof PENDING_FIX
  | typeof FALSE_POSITIVE
  | typeof OTHER
  | typeof NO_FIX
  | typeof DUPLICATE
  | typeof RISK_ACCEPTED
  | typeof NO_PENDING_FIX
  | typeof HUMAN_ERROR
  | typeof NO_LONGER_ACCEPTED_RISK
  | UnparsedObject;
export const PENDING_FIX = "PENDING_FIX";
export const FALSE_POSITIVE = "FALSE_POSITIVE";
export const OTHER = "OTHER";
export const NO_FIX = "NO_FIX";
export const DUPLICATE = "DUPLICATE";
export const RISK_ACCEPTED = "RISK_ACCEPTED";
export const NO_PENDING_FIX = "NO_PENDING_FIX";
export const HUMAN_ERROR = "HUMAN_ERROR";
export const NO_LONGER_ACCEPTED_RISK = "NO_LONGER_ACCEPTED_RISK";
