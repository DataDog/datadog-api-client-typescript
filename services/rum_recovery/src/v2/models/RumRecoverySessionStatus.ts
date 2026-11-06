import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Session availability or recovery state. `RECOVERED` indicates that the session is ready to query.
 */
export type RumRecoverySessionStatus =
  | typeof AVAILABLE
  | typeof PENDING
  | typeof PROCESSING
  | typeof RECOVERED
  | typeof FAILED
  | typeof RETAINED
  | typeof EXPIRED
  | typeof CANCELLED
  | UnparsedObject;
export const AVAILABLE = "AVAILABLE";
export const PENDING = "PENDING";
export const PROCESSING = "PROCESSING";
export const RECOVERED = "RECOVERED";
export const FAILED = "FAILED";
export const RETAINED = "RETAINED";
export const EXPIRED = "EXPIRED";
export const CANCELLED = "CANCELLED";
