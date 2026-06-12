import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability patterns topics response.
 */
export type LLMObsPatternsTopicsType =
  | typeof GET_TOPICS_RESPONSE
  | UnparsedObject;
export const GET_TOPICS_RESPONSE = "get_topics_response";
