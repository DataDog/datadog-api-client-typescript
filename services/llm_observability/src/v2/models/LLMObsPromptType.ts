import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability prompt.
 */
export type LLMObsPromptType = typeof PROMPT_TEMPLATES | UnparsedObject;
export const PROMPT_TEMPLATES = "prompt-templates";
