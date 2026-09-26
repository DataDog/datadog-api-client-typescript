import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action recommendation from the AI Guard evaluation.
 */
export type AIGuardAction =
  | typeof ALLOW
  | typeof DENY
  | typeof ABORT
  | UnparsedObject;
export const ALLOW = "ALLOW";
export const DENY = "DENY";
export const ABORT = "ABORT";
