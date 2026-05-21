import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The thinking mode for Anthropic extended thinking.
 */
export type LLMObsAnthropicThinkingType =
  | typeof ENABLED
  | typeof DISABLED
  | typeof ADAPTIVE
  | UnparsedObject;
export const ENABLED = "enabled";
export const DISABLED = "disabled";
export const ADAPTIVE = "adaptive";
