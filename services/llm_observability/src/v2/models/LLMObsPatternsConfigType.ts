import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability patterns configuration.
 */
export type LLMObsPatternsConfigType =
  | typeof TOPIC_DISCOVERY_CONFIGS
  | UnparsedObject;
export const TOPIC_DISCOVERY_CONFIGS = "topic_discovery_configs";
