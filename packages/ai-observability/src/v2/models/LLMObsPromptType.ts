import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type of an Agent Observability prompt.
 */
export type LLMObsPromptType = typeof PROMPT_TEMPLATES | UnparsedObject;
export const PROMPT_TEMPLATES = "prompt-templates";
