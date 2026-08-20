import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for triggering an Agent Observability patterns run.
 */
export type LLMObsPatternsRequestType = typeof TOPIC_DISCOVERY | UnparsedObject;
export const TOPIC_DISCOVERY = "topic_discovery";
