import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability patterns run status.
 */
export type LLMObsPatternsRunStatusType =
  | typeof TOPIC_DISCOVERY_RUN_STATUS
  | UnparsedObject;
export const TOPIC_DISCOVERY_RUN_STATUS = "topic_discovery_run_status";
