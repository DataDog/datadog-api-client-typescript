import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptChatTemplateItem } from "./LLMObsPromptChatTemplateItem";

/**
 * A text template or a list of chat messages and named message placeholders.
 * **Preview:** Message placeholders are available in Preview. To request access, contact [Datadog Support](https://www.datadoghq.com/support/) or your Customer Success Manager.
 */
export type LLMObsPromptTemplate =
  | string
  | Array<LLMObsPromptChatTemplateItem>
  | UnparsedObject;
