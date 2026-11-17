import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type for an Agent Observability spans search request.
 */
export type LLMObsSearchSpansRequestType = typeof SPANS | UnparsedObject;
export const SPANS = "spans";
