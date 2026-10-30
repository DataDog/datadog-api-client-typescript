import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Approve the exact submitted total and expiry, or deny the request.
 */
export type TemporaryGrantRequestDecision =
  | typeof APPROVED
  | typeof DENIED
  | UnparsedObject;
export const APPROVED = "approved";
export const DENIED = "denied";
