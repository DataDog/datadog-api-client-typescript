import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The name of a supported LLM provider integration.
 */
export type LLMObsIntegrationName =
  | typeof OPENAI
  | typeof AMAZON_BEDROCK
  | typeof ANTHROPIC
  | typeof AZURE_OPENAI
  | typeof VERTEX_AI
  | typeof LLMPROXY
  | UnparsedObject;
export const OPENAI = "openai";
export const AMAZON_BEDROCK = "amazon_bedrock";
export const ANTHROPIC = "anthropic";
export const AZURE_OPENAI = "azure_openai";
export const VERTEX_AI = "vertex_ai";
export const LLMPROXY = "llmproxy";
