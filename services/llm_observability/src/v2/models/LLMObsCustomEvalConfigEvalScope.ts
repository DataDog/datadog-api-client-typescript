import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Scope at which to evaluate spans.
 */
export type LLMObsCustomEvalConfigEvalScope =
  | typeof SPAN
  | typeof TRACE
  | typeof SESSION
  | UnparsedObject;
export const SPAN = "span";
export const TRACE = "trace";
export const SESSION = "session";
