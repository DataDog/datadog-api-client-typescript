import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";
import { LLMObsPromptIncludeItem } from "./LLMObsPromptIncludeItem";

/**
 * A chat message or a reference to a specific version of another prompt. A chat message must not contain an `include` field; the API rejects items that combine both forms.
 */
export type LLMObsPromptAuthoringItem =
  | LLMObsPromptChatMessage
  | LLMObsPromptIncludeItem
  | UnparsedObject;
