import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";

/**
 * A text template or a list of chat messages.
 */
export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatMessage>
  | UnparsedObject;
