import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Action to perform when a guardrail threshold is triggered.
 */
export type GuardrailTriggerAction =
  | typeof PAUSE
  | typeof ABORT
  | UnparsedObject;
export const PAUSE = "PAUSE";
export const ABORT = "ABORT";
