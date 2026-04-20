import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Name of the LLM integration provider.
 */
export type LLMObsCustomEvalConfigIntegrationProvider =
  | typeof OPENAI
  | typeof AMAZON_BEDROCK
  | typeof ANTHROPIC
  | typeof AZURE_OPENAI
  | typeof VERTEX_AI
  | typeof LLM_PROXY
  | UnparsedObject;
export const OPENAI = "openai";
export const AMAZON_BEDROCK = "amazon-bedrock";
export const ANTHROPIC = "anthropic";
export const AZURE_OPENAI = "azure-openai";
export const VERTEX_AI = "vertex-ai";
export const LLM_PROXY = "llm-proxy";
