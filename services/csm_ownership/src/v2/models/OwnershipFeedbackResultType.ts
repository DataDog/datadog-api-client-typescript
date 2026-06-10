import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership feedback result resource. The value should always be `ownership_feedback_result`.
 */
export type OwnershipFeedbackResultType =
  | typeof OWNERSHIP_FEEDBACK_RESULT
  | UnparsedObject;
export const OWNERSHIP_FEEDBACK_RESULT = "ownership_feedback_result";
