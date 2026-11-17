import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { LLMObsDisplayBlockInteractionResponseItem } from "./LLMObsDisplayBlockInteractionResponseItem";
import { LLMObsTraceInteractionResponseItem } from "./LLMObsTraceInteractionResponseItem";

/**
 * A single interaction result.
 */
export type LLMObsAnnotationQueueInteractionResponseItem =
  | LLMObsTraceInteractionResponseItem
  | LLMObsDisplayBlockInteractionResponseItem
  | UnparsedObject;
