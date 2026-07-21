import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability prompt version.
 */
export type LLMObsPromptVersionType =
  | typeof PROMPT_TEMPLATE_VERSIONS
  | UnparsedObject;
export const PROMPT_TEMPLATE_VERSIONS = "prompt-template-versions";
