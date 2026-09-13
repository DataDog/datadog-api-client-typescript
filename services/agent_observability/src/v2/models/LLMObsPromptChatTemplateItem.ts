import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";
import { LLMObsPromptMessagePlaceholder } from "./LLMObsPromptMessagePlaceholder";

/**
 * A chat message or a named message placeholder in a prompt template.
 */
export type LLMObsPromptChatTemplateItem =
  | LLMObsPromptChatMessage
  | LLMObsPromptMessagePlaceholder
  | UnparsedObject;
