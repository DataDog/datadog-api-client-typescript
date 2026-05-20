import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for an LLM Observability span.
 */
export type LLMObsSpanType = typeof SPAN | UnparsedObject;
export const SPAN = "span";
