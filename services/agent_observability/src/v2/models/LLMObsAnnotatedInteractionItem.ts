import { UnparsedObject } from "@datadog/datadog-api-client";

import { LLMObsDisplayBlockAnnotatedInteractionItem } from "./LLMObsDisplayBlockAnnotatedInteractionItem";
import { LLMObsFrontendAnnotatedInteractionItem } from "./LLMObsFrontendAnnotatedInteractionItem";
import { LLMObsTraceAnnotatedInteractionItem } from "./LLMObsTraceAnnotatedInteractionItem";

/**
 * An interaction with its associated annotations.
 */
export type LLMObsAnnotatedInteractionItem =
  | LLMObsTraceAnnotatedInteractionItem
  | LLMObsDisplayBlockAnnotatedInteractionItem
  | LLMObsFrontendAnnotatedInteractionItem
  | UnparsedObject;
