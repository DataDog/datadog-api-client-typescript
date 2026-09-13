import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the chat-template item.
 */
export type LLMObsPromptMessagePlaceholderType =
  | typeof PLACEHOLDER
  | UnparsedObject;
export const PLACEHOLDER = "placeholder";
