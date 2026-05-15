import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsDisplayBlockAnnotatedInteractionItem } from "./LLMObsDisplayBlockAnnotatedInteractionItem";
import { LLMObsTraceAnnotatedInteractionItem } from "./LLMObsTraceAnnotatedInteractionItem";

/**
 * An interaction with its associated annotations.
 */
export type LLMObsAnnotatedInteractionItem =
  | LLMObsTraceAnnotatedInteractionItem
  | LLMObsDisplayBlockAnnotatedInteractionItem
  | UnparsedObject;
