import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptAuthoringMessagesTemplate } from "./LLMObsPromptAuthoringMessagesTemplate";
import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";

/**
 * A text template, a list of chat messages, or an authored chat object. Text can include an exact prompt version with `{{>prompt-id version=N}}`. Use an authored chat object when including prompts as chat messages.
 */
export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatMessage>
  | LLMObsPromptAuthoringMessagesTemplate
  | UnparsedObject;
