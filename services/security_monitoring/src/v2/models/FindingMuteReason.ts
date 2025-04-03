import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reason why this finding is muted or unmuted.
 */
export type FindingMuteReason =
  | typeof PENDING_FIX
  | typeof FALSE_POSITIVE
  | typeof ACCEPTED_RISK
  | typeof NO_PENDING_FIX
  | typeof HUMAN_ERROR
  | typeof NO_LONGER_ACCEPTED_RISK
  | typeof OTHER
  | UnparsedObject;
export const PENDING_FIX = "PENDING_FIX";
export const FALSE_POSITIVE = "FALSE_POSITIVE";
export const ACCEPTED_RISK = "ACCEPTED_RISK";
export const NO_PENDING_FIX = "NO_PENDING_FIX";
export const HUMAN_ERROR = "HUMAN_ERROR";
export const NO_LONGER_ACCEPTED_RISK = "NO_LONGER_ACCEPTED_RISK";
export const OTHER = "OTHER";
