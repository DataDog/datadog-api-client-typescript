import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reasoning effort level for OpenAI models that support it.
 */
export type LLMObsOpenAIReasoningEffort =
  | typeof NONE
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof XHIGH
  | UnparsedObject;
export const NONE = "none";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const XHIGH = "xhigh";
