import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The recommended action for the evaluated conversation.
 */
export type AIGuardAction =
  | typeof ALLOW
  | typeof DENY
  | typeof ABORT
  | UnparsedObject;
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const ABORT = "ABORT";
