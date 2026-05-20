import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for an LLM Observability spans search request.
 */
export type LLMObsSearchSpansRequestType = typeof SPANS | UnparsedObject;
export const SPANS = "spans";
