import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type of an Agent Observability prompt version.
 */
export type LLMObsPromptVersionType =
  | typeof PROMPT_TEMPLATE_VERSIONS
  | UnparsedObject;
export const PROMPT_TEMPLATE_VERSIONS = "prompt-template-versions";
