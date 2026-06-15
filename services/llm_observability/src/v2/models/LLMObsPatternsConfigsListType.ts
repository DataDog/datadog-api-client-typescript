import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of a list of LLM Observability patterns configurations.
 */
export type LLMObsPatternsConfigsListType =
  | typeof LIST_TOPIC_DISCOVERY_CONFIGS_RESPONSE
  | UnparsedObject;
export const LIST_TOPIC_DISCOVERY_CONFIGS_RESPONSE =
  "list_topic_discovery_configs_response";
