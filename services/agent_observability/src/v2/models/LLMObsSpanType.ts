import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for an Agent Observability span.
 */
export type LLMObsSpanType = typeof SPAN | UnparsedObject;
export const SPAN = "span";
