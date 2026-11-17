import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of the `OpenAIIntegrationType` object.
 */
export type OpenAIIntegrationType = typeof OPENAI | UnparsedObject;
export const OPENAI = "OpenAI";
