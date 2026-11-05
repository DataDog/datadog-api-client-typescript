import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Known provider implementation.
 */
export type AiGatewayKnownProvider =
  | typeof CUSTOM
  | typeof ANTHROPIC
  | typeof OPENAI
  | typeof AZURE_OPENAI
  | typeof BEDROCK
  | typeof GEMINI
  | typeof BASETEN
  | typeof FIREWORKS
  | typeof TOGETHER
  | typeof TYPESAFE
  | typeof AZURE_FOUNDRY
  | UnparsedObject;
export const CUSTOM = "custom";
export const ANTHROPIC = "anthropic";
export const OPENAI = "openai";
export const AZURE_OPENAI = "azure_openai";
export const BEDROCK = "bedrock";
export const GEMINI = "gemini";
export const BASETEN = "baseten";
export const FIREWORKS = "fireworks";
export const TOGETHER = "together";
export const TYPESAFE = "typesafe";
export const AZURE_FOUNDRY = "azure_foundry";
