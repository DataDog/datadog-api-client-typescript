import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of a list of LLM Observability patterns runs.
 */
export type LLMObsPatternsRunsListType =
  | typeof LIST_TOPIC_DISCOVERY_RUNS_RESPONSE
  | UnparsedObject;
export const LIST_TOPIC_DISCOVERY_RUNS_RESPONSE =
  "list_topic_discovery_runs_response";
