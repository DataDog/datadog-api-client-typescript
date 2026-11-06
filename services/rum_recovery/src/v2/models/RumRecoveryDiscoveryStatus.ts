import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Batch discovery state. QUEUED indicates that the request is waiting for processing capacity.
 */
export type RumRecoveryDiscoveryStatus =
  | typeof QUEUED
  | typeof PENDING
  | typeof SLICING
  | typeof DISCOVERED
  | typeof PROCESSING
  | typeof COMPLETED
  | typeof FAILED
  | typeof CANCELLED
  | UnparsedObject;
export const QUEUED = "QUEUED";
export const PENDING = "PENDING";
export const SLICING = "SLICING";
export const DISCOVERED = "DISCOVERED";
export const PROCESSING = "PROCESSING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
export const CANCELLED = "CANCELLED";
