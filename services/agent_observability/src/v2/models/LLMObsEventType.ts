import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for Agent Observability experiment events.
 */
export type LLMObsEventType = typeof EVENTS | UnparsedObject;
export const EVENTS = "events";
