import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The effort level for Anthropic inference.
 */
export type LLMObsAnthropicEffort =
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof MAX
  | UnparsedObject;
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const MAX = "max";
