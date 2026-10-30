import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The durable request decision, independent of whether its grant is still active.
 */
export type TemporaryGrantRequestStatus =
  | typeof PENDING
  | typeof APPROVED
  | typeof DENIED
  | typeof CANCELLED
  | UnparsedObject;
export const PENDING = "pending";
export const APPROVED = "approved";
export const DENIED = "denied";
export const CANCELLED = "cancelled";
