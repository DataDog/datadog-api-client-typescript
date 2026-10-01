import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current state of an Archive Search.
 */
export type ArchiveSearchStatus =
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | typeof CANCELLED
  | typeof QUOTA_REACHED
  | typeof EXPIRED
  | UnparsedObject;
export const RUNNING = "RUNNING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
export const QUOTA_REACHED = "QUOTA_REACHED";
export const EXPIRED = "EXPIRED";
