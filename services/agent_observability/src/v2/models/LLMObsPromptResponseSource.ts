import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the prompt was created from the registry or discovered from observed LLM calls.
 */
export type LLMObsPromptResponseSource =
  | typeof REGISTRY
  | typeof CODE
  | UnparsedObject;
export const REGISTRY = "registry";
export const CODE = "code";
