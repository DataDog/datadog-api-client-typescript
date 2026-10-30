import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Name of the LLM integration provider. Use `deterministic` for a code evaluator, which runs `llm_judge_config.user_specified_json_post_processing_function` instead of calling an LLM. `insights_sponsored` is returned for evaluators that Datadog manages and cannot be set.
 */
export type LLMObsCustomEvalConfigIntegrationProvider =
  | typeof OPENAI
  | typeof AMAZON_BEDROCK
  | typeof ANTHROPIC
  | typeof AZURE_OPENAI
  | typeof VERTEX_AI
  | typeof LLM_PROXY
  | typeof DETERMINISTIC
  | typeof TYPESAFE
  | typeof DATADOG
  | typeof DATADOG_AI_GATEWAY
  | typeof INSIGHTS_SPONSORED
  | UnparsedObject;
export const OPENAI = "openai";
export const AMAZON_BEDROCK = "amazon_bedrock";
export const ANTHROPIC = "anthropic";
export const AZURE_OPENAI = "azure_openai";
export const VERTEX_AI = "vertex_ai";
export const LLM_PROXY = "llmproxy";
export const DETERMINISTIC = "deterministic";
export const TYPESAFE = "typesafe";
export const DATADOG = "datadog";
export const DATADOG_AI_GATEWAY = "datadog_ai_gateway";
export const INSIGHTS_SPONSORED = "insights_sponsored";
