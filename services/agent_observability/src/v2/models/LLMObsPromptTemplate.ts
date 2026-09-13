import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptChatTemplateItem } from "./LLMObsPromptChatTemplateItem";

/**
 * A text template or a list of chat messages.
 */
export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatTemplateItem>
  | UnparsedObject;
