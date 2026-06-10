import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The feedback action to apply to an inference.
 */
export type OwnershipFeedbackAction =
  | typeof CONFIRM
  | typeof REJECT
  | typeof CORRECT
  | typeof PERSIST
  | UnparsedObject;
export const CONFIRM = "confirm";
export const REJECT = "reject";
export const CORRECT = "correct";
export const PERSIST = "persist";
