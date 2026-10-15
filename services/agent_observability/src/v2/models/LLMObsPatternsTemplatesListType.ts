import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of a list of Agent Observability patterns templates.
 */
export type LLMObsPatternsTemplatesListType =
  | typeof LIST_TOPIC_DISCOVERY_TEMPLATES_RESPONSE
  | UnparsedObject;
export const LIST_TOPIC_DISCOVERY_TEMPLATES_RESPONSE =
  "list_topic_discovery_templates_response";
