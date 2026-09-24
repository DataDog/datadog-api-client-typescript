import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptAuthoringMessagesTemplate } from "./LLMObsPromptAuthoringMessagesTemplate";
import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";

/**
 * A text template, a list of chat messages, or an authored chat object. Text can include an exact prompt version with `{{>prompt-id version=N}}`; other text, including `{{>...}}` sequences without a version, remains literal. Use an authored chat object when including prompts as chat messages.
 * **Preview**: Prompt composition is available in Preview. To request access, contact [Datadog Support](https://docs.datadoghq.com/help/) or your Customer Success Manager.
 * Without access, inline references remain literal text and structured includes are unsupported. Previously compiled prompt versions remain available for execution.
 */
export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatMessage>
  | LLMObsPromptAuthoringMessagesTemplate
  | UnparsedObject;
