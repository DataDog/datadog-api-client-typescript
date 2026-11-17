import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of chat-template item.
 */
export type LLMObsPromptMessagePlaceholderType =
  | typeof PLACEHOLDER
  | UnparsedObject;
export const PLACEHOLDER = "placeholder";
