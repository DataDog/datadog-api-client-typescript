import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Operation supported by a custom provider.
 */
export type AiGatewayCustomProviderSupportedOperation =
  | typeof OPENAI_CHAT_COMPLETIONS
  | typeof OPENAI_RESPONSES
  | typeof ANTHROPIC_MESSAGES
  | UnparsedObject;
export const OPENAI_CHAT_COMPLETIONS = "OPENAI_CHAT_COMPLETIONS";
export const OPENAI_RESPONSES = "OPENAI_RESPONSES";
export const ANTHROPIC_MESSAGES = "ANTHROPIC_MESSAGES";
