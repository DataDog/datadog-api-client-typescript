import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Recovery request state.
 */
export type RumRecoveryRequestStatus =
  | typeof PENDING
  | typeof PROCESSING
  | typeof COMPLETED
  | typeof FAILED
  | typeof CANCELLED
  | typeof EXPIRED
  | UnparsedObject;
export const PENDING = "PENDING";
export const PROCESSING = "PROCESSING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
export const EXPIRED = "EXPIRED";
