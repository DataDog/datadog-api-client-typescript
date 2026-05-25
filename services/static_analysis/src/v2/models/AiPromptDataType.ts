import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI prompt resource type.
 */
export type AiPromptDataType = typeof AI_PROMPT | UnparsedObject;
export const AI_PROMPT = "ai_prompt";
