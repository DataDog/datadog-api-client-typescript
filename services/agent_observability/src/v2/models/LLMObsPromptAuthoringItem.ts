import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsPromptChatMessage } from "./LLMObsPromptChatMessage";
import { LLMObsPromptIncludeItem } from "./LLMObsPromptIncludeItem";

/**
 * A chat message or an explicitly versioned prompt include.
 */
export type LLMObsPromptAuthoringItem =
  | LLMObsPromptChatMessage
  | LLMObsPromptIncludeItem
  | UnparsedObject;
