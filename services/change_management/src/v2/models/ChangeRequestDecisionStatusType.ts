import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a change request decision.
 */
export type ChangeRequestDecisionStatusType =
  | typeof REQUESTED
  | typeof APPROVED
  | typeof DECLINED
  | UnparsedObject;
export const REQUESTED = "REQUESTED";
export const APPROVED = "APPROVED";
export const DECLINED = "DECLINED";
