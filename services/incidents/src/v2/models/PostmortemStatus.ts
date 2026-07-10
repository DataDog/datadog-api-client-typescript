import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the postmortem.
 */
export type PostmortemStatus =
  | typeof DRAFT
  | typeof IN_REVIEW
  | typeof COMPLETED
  | UnparsedObject;
export const DRAFT = "draft";
export const IN_REVIEW = "in_review";
export const COMPLETED = "completed";
