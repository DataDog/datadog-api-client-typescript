import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action to perform when a guardrail threshold is triggered.
 */
export type GuardrailTriggerAction =
  | typeof PAUSE
  | typeof ABORT
  | UnparsedObject;
export const PAUSE = "PAUSE";
export const ABORT = "ABORT";
