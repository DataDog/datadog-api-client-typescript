import { UnparsedObject } from "@datadog/datadog-api-client-core";

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
