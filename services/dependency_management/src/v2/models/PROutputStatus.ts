import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The current status of the pull request.
 */
export type PROutputStatus =
  | typeof PENDING
  | typeof DRAFT
  | typeof READY
  | typeof MERGED
  | typeof CLOSED
  | UnparsedObject;
export const PENDING = "PENDING";
export const DRAFT = "DRAFT";
export const READY = "READY";
export const MERGED = "MERGED";
export const CLOSED = "CLOSED";
