import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability patterns trigger response.
 */
export type LLMObsPatternsTriggerResponseType =
  | typeof TOPIC_DISCOVERY_RUN
  | UnparsedObject;
export const TOPIC_DISCOVERY_RUN = "topic_discovery_run";
