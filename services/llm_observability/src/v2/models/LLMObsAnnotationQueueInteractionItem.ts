import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsDisplayBlockInteractionItem } from "./LLMObsDisplayBlockInteractionItem";
import { LLMObsTraceInteractionItem } from "./LLMObsTraceInteractionItem";

/**
 * A single interaction to add to an annotation queue.
 */
export type LLMObsAnnotationQueueInteractionItem =
  | LLMObsTraceInteractionItem
  | LLMObsDisplayBlockInteractionItem
  | UnparsedObject;
