import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Work item status
 */
export type Case3rdPartyTicketStatus =
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const IN_PROGRESS = "IN_PROGRESS";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
